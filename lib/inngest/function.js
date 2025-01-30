import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "helloWorld", name: "Hello World" },
  { event: "test/hell.world" },
  async (event, step) => {
    await step.sleep("wait a moment", "1s");
    return { message: `hello ${event.data.email}` };
  }
);
