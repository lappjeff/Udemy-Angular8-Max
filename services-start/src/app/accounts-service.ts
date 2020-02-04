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
    this.accounts = [...this.accounts, { name, status }];
  }

  updateStatus(id: number, status: string) {
    const accountsCopy = [...this.accounts];
    accountsCopy[id].status = status;
    this.accounts = accountsCopy;
  }
}
