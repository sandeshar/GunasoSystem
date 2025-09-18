import { FileUploaderDropContainer } from "@carbon/react";

interface FileUploaderProps {
    onAddFiles?: (event: any, data: { addedFiles: File[] }) => void;
    disabled?: boolean;
}

export default function FileUploader({
    onAddFiles,
    disabled = false
}: FileUploaderProps) {
    const handleAddFiles = (event: any, data: { addedFiles: File[] }) => {
        if (onAddFiles) {
            onAddFiles(event, data);
        }
    };

    return (
        <FileUploaderDropContainer
            labelText="Drag & Drop files here or Upload"
            accept={['.csv', '.json']}
            disabled={disabled}
            onAddFiles={handleAddFiles}
        />
    );
}
