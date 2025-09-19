import { Folder } from "@carbon/icons-react";
import { FileUploaderDropContainer, FormLabel } from "@carbon/react";

interface FileUploaderProps {
    onAddFiles?: (event: any, data: { addedFiles: File[] }) => void;
    disabled?: boolean;
    label?: string;
}

export default function FileUploader({
    onAddFiles,
    disabled = false,
    label
}: FileUploaderProps) {
    const handleAddFiles = (event: any, data: { addedFiles: File[] }) => {
        if (onAddFiles) {
            onAddFiles(event, data);
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <FormLabel>{label}</FormLabel>
            <FileUploaderDropContainer
                accept={[
                    'image/jpeg',
                    'image/png'
                ]}
                disabled={disabled}
                onAddFiles={handleAddFiles}
                style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', maxHeight: '50px', color: 'inherit' }}
                labelText={
                    <span
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                            fontSize: "14px",
                        }}
                    >

                        Drag & Drop files here or Upload<Folder size={20} />
                    </span>
                }
            />

        </div>
    );
}
