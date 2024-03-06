import React, { useState } from 'react';
import FileItem from './DocumentItem';
import IconAddSquare from '../../../Icon/Assistants/IconAddSquare';
import DocumentUploadModal from './DocumentUploadModal';

interface DocumentListI {
  asstId?: string;
}

const DocumentList = ({asstId}: DocumentListI) => {
  const [visibleDocumentUploadModal, setVisibleDocumentUploadModal] = useState<boolean>(false);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      <FileItem />
      <FileItem />
      <FileItem />
      <div className="panel flex-1 py-[25px] px-6 h-[194px] flex justify-center items-center cursor-pointer" onClick={() => setVisibleDocumentUploadModal(true)}>
        <div className="flex">
          <IconAddSquare />
          <h5 className="ml-2 leading-6">Add new file</h5>
        </div>
      </div>
      <DocumentUploadModal visibleDocumentUploadModal={visibleDocumentUploadModal} setVisibleDocumentUploadModal={setVisibleDocumentUploadModal} />
    </div>
  );
};

export default DocumentList;
