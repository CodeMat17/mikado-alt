import { createClient } from "contentful";

const useContentfulLinks = () => {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_ACCESS_TOKEN,
  });

  const getCallNo = async () => {
    try {
      const callNo = await client.getEntries({
        content_type: "callNumber",
      });

      const sanitizedCallNo = callNo.items.map((item) => {
        return {
          ...item.fields,
        };
      });

      return sanitizedCallNo;
    } catch (error) {
      console.log(`Error fetching links from contentful: ${error}`);
    }
  };

  const getWhatsAppNo = async () => {
    try {
      const whatsapp = await client.getEntries({
        content_type: "whatsAppNumber",
      });

      const sanitizedwhatsapp = whatsapp.items.map((item) => {
        return {
          ...item.fields,
        };
      });

      return sanitizedwhatsapp;
    } catch (error) {
      console.log(`Error fetching links from contentful: ${error}`);
    }
  };

    const getEmail = async () => {
      try {
        const email = await client.getEntries({
          content_type: "emailAddress",
        });

        const sanitizedEmail = email.items.map((item) => {
          return {
            ...item.fields,
          };
        });

        return sanitizedEmail;
      } catch (error) {
        console.log(`Error fetching links from contentful: ${error}`);
      }
  };
  
  const getFb = async () => {
    try {
      const fb = await client.getEntries({
        content_type: "facebookLink",
      });

      const sanitizedFb = fb.items.map((item) => {
        return {
          ...item.fields,
        };
      });

      return sanitizedFb;
    } catch (error) {
      console.log(`Error fetching links from contentful: ${error}`);
    }
  };

  const getIg = async () => {
    try {
      const ig = await client.getEntries({
        content_type: "instagramLink",
      });

      const sanitizedIg = ig.items.map((item) => {
        return {
          ...item.fields,
        };
      });

      return sanitizedIg;
    } catch (error) {
      console.log(`Error fetching links from contentful: ${error}`);
    }
  };

  const getTw = async () => {
    try {
      const tw = await client.getEntries({
        content_type: "twitterLink",
      });

      const sanitizedTw = tw.items.map((item) => {
        return {
          ...item.fields,
        };
      });

      return sanitizedTw;
    } catch (error) {
      console.log(`Error fetching links from contentful: ${error}`);
    }
  };


  return { getCallNo, getWhatsAppNo, getEmail, getFb, getIg, getTw };
};

export default useContentfulLinks;
