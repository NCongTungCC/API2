export interface CurrentTimeResponse {
  server_current_time: string;
}

const pad2 = (value: number): string => String(value).padStart(2, '0');

export class CurrentTimeService {
  private format(date: Date): string {
    const datePart = [date.getFullYear(), pad2(date.getMonth() + 1), pad2(date.getDate())].join('-');
    const timePart = [date.getHours(), date.getMinutes(), date.getSeconds()].map(pad2).join(':');

    return `${datePart} ${timePart}`;
  }

  public getCurrentTime(): CurrentTimeResponse {
    const serverCurrentTime = new Date();
    return {
      server_current_time: this.format(serverCurrentTime)
    };
  }
}

export const currentTimeService = new CurrentTimeService();
