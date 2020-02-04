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
    // const accountsCopy = [...this.accounts];
    const accountsCopy = this.accounts.map((account, index) => {
      if (index === id) {
        account.status = status;
        return account;
      } else {
        return account;
      }
    });

    // accountsCopy[id].status = status;
    this.accounts = accountsCopy;
  }
}
