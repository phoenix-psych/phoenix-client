export class Client {
    private id: string;
    private name: string;
    private status: string;
  
    constructor(id: string, name: string, status: string) {
      this.id = id;
      this.name = name;
      this.status = status;
    }
  }