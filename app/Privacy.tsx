import { Shield, Lock, Eye, FileCheck, ArrowLeft } from "lucide-react";
import { Button } from "@/app/components/ui/button";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-black via-red-700 to-green-700 text-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <span className="font-bold text-2xl block">
                Agwas Cyber Cafe
              </span>
              <span className="text-xs text-green-100">
                Huduma Kwa Wote
              </span>
            </div>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white/10"
              onClick={() => window.location.href = "/"}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-white to-red-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-700 rounded-full mb-6">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Privacy Policy & Data Protection
            </h1>
            <p className="text-lg text-gray-600">
              How we protect your data in accordance with Kenyan law
            </p>
            <div className="mt-4 text-sm text-gray-500">
              Last Updated: February 3, 2026
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-8 border border-gray-200">
              <h2 className="text-2xl font-bold mb-4 text-green-700">
                Our Commitment to Your Privacy
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                At Agwas Cyber Cafe, we are committed to protecting your personal data and respecting your privacy rights. This Privacy Policy explains how we collect, use, store, and protect your information in compliance with the{" "}
                <span className="font-semibold">Kenya Data Protection Act, 2019</span> and other relevant Kenyan laws.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We take your data security seriously and have implemented robust measures to ensure your information is protected at all times.
              </p>
            </div>

            {/* Data Protection Laws */}
            <div className="bg-gradient-to-r from-green-50 to-red-50 rounded-2xl shadow-lg p-8 md:p-12 mb-8 border-l-4 border-green-700">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-green-700 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileCheck className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2 text-green-700">
                    Kenya Data Protection Act, 2019
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    The Data Protection Act establishes the legal framework for data protection in Kenya. Key provisions include:
                  </p>
                </div>
              </div>
              <ul className="space-y-3 text-gray-700 ml-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-700 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Right to Privacy:</strong> Your personal data is processed lawfully, fairly, and in a transparent manner</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Purpose Limitation:</strong> We collect data only for specific, explicit, and legitimate purposes</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-700 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Data Minimization:</strong> We collect only the data necessary to provide our services</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Accuracy:</strong> We ensure your data is accurate and kept up to date</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-700 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Storage Limitation:</strong> We retain data only as long as necessary</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Security:</strong> We implement appropriate technical and organizational measures</span>
                </li>
              </ul>
            </div>

            {/* What Data We Collect */}
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-8 border border-gray-200">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2 text-red-600">
                    What Information We Collect
                  </h2>
                </div>
              </div>
              <div className="space-y-4 text-gray-700">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Personal Information:</h3>
                  <ul className="space-y-2 ml-4">
                    <li>• Name and contact details (phone number, email address)</li>
                    <li>• KRA PIN, NSSF number, NHIF/SHA number (only when necessary for service delivery)</li>
                    <li>• National ID number (for verification purposes)</li>
                    <li>• Passport details (when applying for passport services)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Service Information:</h3>
                  <ul className="space-y-2 ml-4">
                    <li>• Service requests and transaction history</li>
                    <li>• Communication records (emails, WhatsApp messages)</li>
                    <li>• Payment information (processed through secure channels)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How We Protect Your Data */}
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-8 border border-gray-200">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-green-700 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Lock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2 text-green-700">
                    How We Protect Your Data
                  </h2>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="font-semibold text-lg mb-3 text-green-700">
                    Technical Measures
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>✓ End-to-end encryption for data transmission</li>
                    <li>✓ Secure servers with regular backups</li>
                    <li>✓ Firewall and intrusion detection systems</li>
                    <li>✓ Regular security audits and updates</li>
                  </ul>
                </div>
                <div className="bg-red-50 rounded-lg p-6">
                  <h3 className="font-semibold text-lg mb-3 text-red-600">
                    Organizational Measures
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>✓ Staff training on data protection</li>
                    <li>✓ Strict access controls and authentication</li>
                    <li>✓ Confidentiality agreements with employees</li>
                    <li>✓ Data breach response procedures</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Your Rights */}
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-8 border border-gray-200">
              <h2 className="text-2xl font-bold mb-4 text-green-700">
                Your Data Protection Rights
              </h2>
              <p className="text-gray-700 mb-4">
                Under the Kenya Data Protection Act, you have the following rights:
              </p>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-green-700 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <strong>Right to Access:</strong> Request copies of your personal data
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-100 rounded flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-red-600 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <strong>Right to Rectification:</strong> Correct inaccurate or incomplete data
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-green-700 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <strong>Right to Erasure:</strong> Request deletion of your personal data
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-100 rounded flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-red-600 font-bold text-sm">4</span>
                  </div>
                  <div>
                    <strong>Right to Object:</strong> Object to processing of your personal data
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-green-700 font-bold text-sm">5</span>
                  </div>
                  <div>
                    <strong>Right to Data Portability:</strong> Transfer your data to another service provider
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-100 rounded flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-red-600 font-bold text-sm">6</span>
                  </div>
                  <div>
                    <strong>Right to Lodge a Complaint:</strong> File a complaint with the Office of the Data Protection Commissioner
                  </div>
                </div>
              </div>
            </div>

            {/* Data Sharing */}
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-8 border border-gray-200">
              <h2 className="text-2xl font-bold mb-4 text-red-600">
                Data Sharing and Third Parties
              </h2>
              <p className="text-gray-700 mb-4">
                We do not sell, rent, or trade your personal information. We may share your data only in the following circumstances:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Government Services:</strong> When necessary to process your requests with KRA, NHIF, NSSF, eCitizen, or other government agencies</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-700 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Legal Requirements:</strong> When required by Kenyan law or court orders</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Service Providers:</strong> Trusted partners who assist us in providing services (under strict confidentiality agreements)</span>
                </li>
              </ul>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-r from-green-700 to-red-600 rounded-2xl shadow-lg p-8 md:p-12 text-white">
              <h2 className="text-2xl font-bold mb-4">
                Contact Us About Privacy
              </h2>
              <p className="mb-6">
                If you have questions about this Privacy Policy or want to exercise your data protection rights, please contact us:
              </p>
              <div className="space-y-3">
                <p><strong>Email:</strong> agwassagwass@gmail.com</p>
                <p><strong>Phone:</strong> +254 781 917 121</p>
                <p><strong>WhatsApp:</strong> +254 781 917 121</p>
              </div>
              <div className="mt-6 pt-6 border-t border-white/20">
                <p className="text-sm">
                  <strong>Office of the Data Protection Commissioner (Kenya):</strong><br />
                  Website: www.odpc.go.ke<br />
                  Email: info@odpc.go.ke
                </p>
              </div>
            </div>

            {/* Back Button */}
            <div className="mt-12 text-center">
              <Button
                size="lg"
                className="bg-green-700 hover:bg-green-800 text-white px-8 py-6 text-lg"
                onClick={() => window.location.href = "/"}
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Home
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-8 border-t-4 border-green-700">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            &copy; 2026 Agwas Cyber Cafe. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
