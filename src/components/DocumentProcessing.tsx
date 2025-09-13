import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Upload, FileText, CheckCircle, Loader } from 'lucide-react';

interface DocumentProcessingProps {}

export const DocumentProcessing: React.FC<DocumentProcessingProps> = () => {
  const [status, setStatus] = useState<'idle' | 'processing' | 'completed'>('idle');
  const [selectedFile, setSelectedFile] = useState<string | null>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file.name);
      setStatus('idle');
    }
  };

  const processFile = () => {
    setStatus('processing');
    
    // Simulate processing
    setTimeout(() => {
      setStatus('completed');
    }, 3000);
  };

  return (
    <section id="document-processing" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Document Processing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Upload your study materials and let our AI extract key insights, 
            create summaries, and generate study guides automatically.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Upload Interface */}
          <div className="glass-card p-8 rounded-2xl slide-in-right">
            <div className="space-y-6">
              <div className="text-center">
                <Upload className="w-12 h-12 text-accent-gold mx-auto mb-4" />
                <h3 className="text-2xl font-semibold mb-2 text-foreground">Upload Your Documents</h3>
                <p className="text-muted-foreground">
                  Support for PDFs, Word docs, PowerPoint, and more
                </p>
              </div>

              <div className="border-2 border-dashed border-glass-border rounded-xl p-8 text-center hover:border-accent-gold transition-colors cursor-pointer">
                <input
                  type="file"
                  onChange={handleFileSelect}
                  className="hidden"
                  id="file-upload"
                  accept=".pdf,.doc,.docx,.ppt,.pptx,.txt"
                />
                <label htmlFor="file-upload" className="cursor-pointer">
                  <FileText className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <p className="text-lg text-foreground mb-2">
                    {selectedFile || "Drop files here or click to browse"}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Max file size: 10MB
                  </p>
                </label>
              </div>

              <Button 
                className={`w-full py-3 rounded-xl ${selectedFile ? 'btn-premium' : 'btn-secondary'}`}
                onClick={processFile}
                disabled={!selectedFile || status === 'processing'}
              >
                {status === 'processing' ? (
                  <>
                    <Loader className="w-5 h-5 mr-2 animate-spin" />
                    Processing Document...
                  </>
                ) : status === 'completed' ? (
                  <>
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Document Processed!
                  </>
                ) : (
                  'Process File'
                )}
              </Button>
            </div>
          </div>

          {/* Status Display */}
          <div className="glass-card p-8 rounded-2xl bounce-in">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">Processing Status</h3>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className={`w-3 h-3 rounded-full ${
                  status === 'processing' || status === 'completed' 
                    ? 'bg-success animate-pulse' 
                    : 'bg-muted'
                }`} />
                <span className="text-foreground">Document uploaded</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className={`w-3 h-3 rounded-full ${
                  status === 'processing' 
                    ? 'bg-warning animate-pulse' 
                    : status === 'completed' 
                    ? 'bg-success' 
                    : 'bg-muted'
                }`} />
                <span className="text-foreground">Extracting content</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className={`w-3 h-3 rounded-full ${
                  status === 'completed' ? 'bg-success' : 'bg-muted'
                }`} />
                <span className="text-foreground">Generating insights</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className={`w-3 h-3 rounded-full ${
                  status === 'completed' ? 'bg-success' : 'bg-muted'
                }`} />
                <span className="text-foreground">Creating study guide</span>
              </div>
            </div>

            {status === 'completed' && (
              <div className="mt-6 p-4 bg-success/10 border border-success/20 rounded-xl">
                <p className="text-success font-medium">
                  ✅ Document processed successfully! 
                  Study guide and key insights have been generated.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DocumentProcessing;