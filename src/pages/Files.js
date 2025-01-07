// client/src/pages/Files.js
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchFiles } from "../redux/filesSlice";
import FileUpload from "../components/FileUpload";

const Files = () => {
  const dispatch = useDispatch();
  const { files, loading, error } = useSelector((state) => state.files);

  useEffect(() => {
    dispatch(fetchFiles());
  }, [dispatch]);

  const formatFileSize = (bytes) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("he-IL", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <FileUpload onFileUploaded={() => dispatch(fetchFiles())} />

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">My Files</h2>
        {loading ? (
          <div className="text-center">Loading...</div>
        ) : error ? (
          <div className="text-red-500">{error}</div>
        ) : (
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    שם הקובץ
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    גודל
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    תאריך העלאה
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    פעולות
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {files.map((file) => (
                  <tr key={file._id}>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      {file.filename.slice(0, 15)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      {formatFileSize(file.size)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      {formatDate(file.uploadDate)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a
                        href={`${process.env.REACT_APP_API_URL}/api/files/download/${file._id}`}
                        className="text-indigo-600 hover:text-indigo-900"
                        download
                      >
                        Download
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Files;
