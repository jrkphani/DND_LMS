import React, { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
// TODO: Import or implement these components and icons:
// import { PageHeader, SearchIcon, LoadingSpinner, ErrorMessage, ButtonGroup, Button, EmptyState, CertificateIcon, CertificateCard, CertificateModal, ShareOptionsModal, api } from '...';
// import { isExpired, isExpiringSoon } from '...';

const CertificateCard = ({ certificate, onClick }) => {
  const expired = isExpired(certificate.expirationDate);
  const expiring = isExpiringSoon(certificate.expirationDate);
  return (
    <div 
      className={`certificate-card ${expired ? 'expired' : expiring ? 'expiring' : 'active'}`}
      onClick={onClick}
    >
      <div className="certificate-header flex items-center justify-between">
        <h3>{certificate.name}</h3>
        {expired ? (
          <Badge variant="destructive">Expired</Badge>
        ) : expiring ? (
          <Badge variant="secondary">Expiring Soon</Badge>
        ) : (
          <Badge variant="default">Active</Badge>
        )}
      </div>
      <div className="certificate-info text-sm mt-2">
        <p><strong>Issued:</strong> {formatDate(certificate.issueDate)}</p>
        {certificate.expirationDate && (
          <p>
            <strong>Expires:</strong> {formatDate(certificate.expirationDate)}
            {expiring && !expired && (
              <span className="expiration-warning ml-2 text-xs text-orange-500">
                ({getRemainingDays(certificate.expirationDate)} days left)
              </span>
            )}
          </p>
        )}
        <p><strong>Course:</strong> {certificate.courseName}</p>
      </div>
      <div className="certificate-footer flex items-center gap-2 mt-2 text-xs text-gray-400">
        {/* <CertificateIcon size="small" /> */}
        <span>{certificate.id}</span>
      </div>
    </div>
  );
};

const Certificates = () => {
  const [certificates, setCertificates] = useState([]);
  const [filteredCertificates, setFilteredCertificates] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filterStatus, setFilterStatus] = useState('all'); // 'all', 'active', 'expiring', 'expired'
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [showCertificateModal, setShowCertificateModal] = useState(false);
  const [showShareOptions, setShowShareOptions] = useState(false);

  useEffect(() => {
    const fetchCertificates = async () => {
      setIsLoading(true);
      try {
        // MOCK DATA
        const mockData = [
          {
            id: 'cert-001',
            name: 'Sales Fundamentals',
            courseName: '3S Orientation',
            issueDate: '2023-01-01',
            expirationDate: '2025-01-01',
          },
          {
            id: 'cert-002',
            name: 'Service Excellence',
            courseName: 'Customer Service',
            issueDate: '2022-06-15',
            expirationDate: '2023-06-15',
          },
        ];
        setCertificates(mockData);
        setFilteredCertificates(mockData);
        setError(null);
      } catch (err) {
        setError('Failed to load certificates. Please try again.');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCertificates();
  }, []);

  useEffect(() => {
    // Apply filters when status or search term changes
    let filtered = certificates;
    if (filterStatus !== 'all') {
      filtered = filtered.filter(cert => {
        if (filterStatus === 'active') {
          return !isExpired(cert.expirationDate) && !isExpiringSoon(cert.expirationDate);
        } else if (filterStatus === 'expiring') {
          return isExpiringSoon(cert.expirationDate);
        } else if (filterStatus === 'expired') {
          return isExpired(cert.expirationDate);
        }
        return true;
      });
    }
    if (searchTerm) {
      filtered = filtered.filter(cert => 
        cert.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cert.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cert.courseName.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    setFilteredCertificates(filtered);
  }, [certificates, filterStatus, searchTerm]);

  // Certificate interactions
  // TODO: Ensure api and toast are imported/implemented
  const handleDownloadCertificate = async (certificate) => {
    try {
      const response = await api.downloadCertificate(certificate.id);
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `${certificate.name.replace(/\s+/g, '_')}.pdf`);
      document.body.appendChild(link);
      link.click();
      link.remove();
      toast.success('Certificate downloaded successfully');
    } catch (error) {
      toast.error('Failed to download certificate');
      console.error(error);
    }
  };

  const handlePrintCertificate = async (certificate) => {
    try {
      const response = await api.getCertificatePrintView(certificate.id);
      const printWindow = window.open('', '_blank');
      printWindow.document.write(response.data);
      printWindow.document.close();
      printWindow.focus();
      printWindow.print();
      setTimeout(() => {
        printWindow.close();
      }, 1000);
    } catch (error) {
      toast.error('Failed to print certificate');
      console.error(error);
    }
  };

  const handleShareViaEmail = (certificate, email, message) => {
    try {
      api.shareCertificateViaEmail(certificate.id, {
        recipientEmail: email,
        message: message
      });
      toast.success('Certificate shared via email');
      setShowShareOptions(false);
    } catch (error) {
      toast.error('Failed to share certificate');
      console.error(error);
    }
  };

  // TODO: Implement or import all referenced components and icons below
  return (
    <div className="certificates-page">
      {/* <PageHeader title="My Certificates" /> */}
      <div className="filters-container">
        <div className="search-filter">
          {/* <SearchIcon /> */}
          <input 
            type="text" 
            placeholder="Search certificates..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="status-filter">
          {/* <ButtonGroup> */}
          <button className={filterStatus === 'all' ? 'selected' : ''} onClick={() => setFilterStatus('all')}>All</button>
          <button className={filterStatus === 'active' ? 'selected' : ''} onClick={() => setFilterStatus('active')}>Active</button>
          <button className={filterStatus === 'expiring' ? 'selected' : ''} onClick={() => setFilterStatus('expiring')}>Expiring Soon</button>
          <button className={filterStatus === 'expired' ? 'selected' : ''} onClick={() => setFilterStatus('expired')}>Expired</button>
          {/* </ButtonGroup> */}
        </div>
      </div>
      {isLoading ? (
        // <LoadingSpinner />
        <div>Loading...</div>
      ) : error ? (
        // <ErrorMessage message={error} />
        <div className="text-red-500">{error}</div>
      ) : filteredCertificates.length === 0 ? (
        // <EmptyState icon={<CertificateIcon size="large" />} title="No certificates found" description="You don't have any certificates matching the current filters." />
        <div>No certificates found.</div>
      ) : (
        <div className="certificates-grid">
          {filteredCertificates.map(certificate => (
            <CertificateCard
              key={certificate.id}
              certificate={certificate}
              onClick={() => {
                setSelectedCertificate(certificate);
                setShowCertificateModal(true);
              }}
            />
          ))}
        </div>
      )}
      {/* <CertificateModal ... /> */}
      {/* <ShareOptionsModal ... /> */}
    </div>
  );
};

export default Certificates; 