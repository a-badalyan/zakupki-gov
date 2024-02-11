import { FtpFileInfo } from './ftp';

export type DownloadFileJobBody = FtpFileInfo;
export type FileDownloadedJobBody = string;
export type ExtractFileJobBody = { fileName: string; archiveName: string };
