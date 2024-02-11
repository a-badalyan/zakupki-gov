import { FtpFileInfo } from '@app/types/ftp';
import { FileInfo } from 'basic-ftp';

export function toFtpFileInfo(fileInfo: FileInfo, dir: string): FtpFileInfo {
  return { fileName: fileInfo.name, path: `${dir}/${fileInfo.name}` };
}
