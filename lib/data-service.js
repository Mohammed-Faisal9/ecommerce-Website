import { Account, Client, Databases } from "node-appwrite";

export async function createAdminClient() {
  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT)
    .setKey(process.env.NEXT_APPWRITE_KEY);

  return {
    databases: new Databases(client),
    account: new Account(client),
  };
}

export async function createSessionClient(session) {
  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT);

  if (session) {
    client.setSession(session);
  }
  return {
    account: new Account(client),
    databases: new Databases(client),
  };
}
