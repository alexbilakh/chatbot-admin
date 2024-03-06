import React, { useEffect, useState } from 'react';
import NewAssistant from './NewAssistant';
import FileItem from './FileItem';
import IconAddSquare from '../../../Icon/Assistants/IconAddSquare';
import FileUploadModal from './FileUploadModal';
import { getAssistantFiles, uploadNewFile } from '../../../../api/assistant';

const FileList = () => {
  const [visibleFileUploadModal, setVisibleFileUploadModal] = useState<boolean>(false);
  const [files, setFiles] = useState<any[]>([]);

  useEffect(() => {
    fetchAssistantFiles();
  }, []);

  const fetchAssistantFiles = async () => {
    const res = await getAssistantFiles();
    setFiles(res);
  };

  const createNewFile = async (file: File) => {
    await uploadNewFile(file);
  };

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {files.map((item, index) => (
        <FileItem key={index} item={item} />
      ))}
      <div className="panel flex-1 py-[25px] px-6 h-[202px] flex justify-center items-center cursor-pointer">
        <div className="flex" onClick={() => setVisibleFileUploadModal(true)}>
          <IconAddSquare />
          <h5 className="ml-2 leading-6">Add new file</h5>
        </div>
        <FileUploadModal visibleFileUploadModal={visibleFileUploadModal} setVisibleFileUploadModal={setVisibleFileUploadModal} createNewFile={createNewFile} />
      </div>
    </div>
  );
};

export default FileList;
