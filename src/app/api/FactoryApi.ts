export class FactoryApi {
  protected baseUrl: string;

  protected baseHeader: { [key: string]: string };

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
    this.baseHeader = {
      'Content-Type': 'application/json',
    };
  }

  protected async get(url: string) {
    const response = await fetch(`${this.baseUrl}${url}`);
    return response.json();
  }

  protected async post(url: string, data: unknown) {
    const response = await fetch(`${this.baseUrl}${url}`, {
      method: 'POST',
      headers: this.baseHeader,
      body: JSON.stringify(data),
    });
    return response.json();
  }

  protected async delete(url: string): Promise<unknown> {
    const response = await fetch(`${this.baseUrl}${url}`, {
      method: 'DELETE',
      headers: this.baseHeader,
    });
    return response.json();
  }
}
