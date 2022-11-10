import { createClient } from "contentful";

function isServer() {
  return !(typeof window != "undefined" && window.document);
}

const serverOnlyCreateClient = () => {
  if (!isServer()) return;
  const client = createClient({
    space: process.env.NEXT_PUBLIC_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_ACCESS_TOKEN,
  });
  return client;
};

export const client = serverOnlyCreateClient();
