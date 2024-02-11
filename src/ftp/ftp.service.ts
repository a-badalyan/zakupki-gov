import { FtpFileInfo } from '@app/types/ftp';
import { Injectable } from '@nestjs/common';
import { Client, FileInfo } from 'basic-ftp';
import { toFtpFileInfo } from './mappers/toFtpFileInfo';

@Injectable()
export class FtpService {
  private ftpClient: Client;

  constructor() {
    this.ftpClient = new Client();
  }

  private async connect(): Promise<void> {
    await this.ftpClient.access({
      host: 'ftp.zakupki.gov.ru',
      user: 'free',
      password: 'free',
    });
  }

  private async getContracts(path: string): Promise<Array<FileInfo>> {
    await this.connect();
    await this.ftpClient.cd(path);

    const result = await this.ftpClient.list();

    this.ftpClient.close();

    return result;
  }

  async downloadFile(fileInfo: FtpFileInfo): Promise<string> {
    await this.connect();
    await this.ftpClient.downloadTo(`temp/${fileInfo.fileName}`, fileInfo.path);

    this.ftpClient.close();

    return fileInfo.fileName;
  }

  async getHistoryContracts(subject: string): Promise<Array<FtpFileInfo>> {
    const dir = `/fcs_regions/${subject}/contracts`;
    const result = await this.getContracts(dir);

    return result.map((file) => toFtpFileInfo(file, dir));
  }

  async getCurMonthContracts(subject: string): Promise<Array<FtpFileInfo>> {
    const dir = `/fcs_regions/${subject}/contracts/currMonth`;
    const result = await this.getContracts(dir);

    return result.map((file) => toFtpFileInfo(file, dir));
  }

  async getPrevMonthContracts(subject: string): Promise<Array<FtpFileInfo>> {
    const dir = `/fcs_regions/${subject}/contracts/prevMonth`;
    const result = await this.getContracts(dir);

    return result.map((file) => toFtpFileInfo(file, dir));
  }
}
