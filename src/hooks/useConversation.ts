import { useState } from "react";
import { postMessage } from "../service/conversation";

export const useConversation = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [IAResponse, setIAResponse] = useState<string[]>([]);
  const [userMessages, setUserMessages] = useState<string[]>([]);

  const handleIAMessage = async (message: string) => {
    setLoading(true);
    setUserMessages((prev) => [...prev, message]);

    const data = await postMessage(message);
    setIAResponse((prev) => [...prev, data]);

    setLoading(false);
  };

  return {
    loading,
    IAResponse,
    userMessages,
    handleIAMessage,
  };
};
