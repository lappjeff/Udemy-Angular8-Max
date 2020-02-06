import { LoggingService } from "./logging.service";
import { Injectable, EventEmitter } from "@angular/core";

@Injectable({ providedIn: "root" })
export class AccountsService {
  accounts = [
    {
      name: "Master Account",
      status: "active"
    },
    {
      name: "Testaccount",
      status: "inactive"
    },
    {
      name: "Hidden Account",
      status: "unknown"
    }
  ];
  statusUpdated: EventEmitter<string> = new EventEmitter();

  constructor(private logger: LoggingService) {}

  addAccount(name: string, status: string) {
    this.accounts.push({ name, status });
    // doesn't work because spreading doesn't change the object reference, only the content - the reference must change for proper change detection
    // this.accounts = [...this.accounts, { name, status }];
    this.logger.logStatusChange(status);
  }

  updateStatus(id: number, status: string) {
    this.accounts = this.accounts.map((account, index) => {
      if (index === id) {
        account.status = status;
        return account;
      } else {
        return account;
      }
    });
    this.logger.logStatusChange(status);
  }
}
