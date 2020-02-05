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

  addAccount(name: string, status: string) {
    this.accounts.push({ name, status });
    // doesn't work because spreading doesn't change the object reference, only the content - the reference must change for proper change detection
    // this.accounts = [...this.accounts, { name, status }];
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
  }
}
