import { api, HydrateClient } from "~/trpc/server";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "~/app/_components/ui/drawer";
import { Button } from "~/app/_components/ui/button";
import { Chat } from "~/app/_components/chat";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });

  void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
          <div className="absolute left-0 top-0 p-4">
            <Drawer>
              <DrawerTrigger>Chat</DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>Chat</DrawerTitle>
                  <div className="flex items-center justify-center">
                    <Chat />
                  </div>
                </DrawerHeader>
                <DrawerFooter>
                  <DrawerClose>
                    <Button variant="outline">Cancel</Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
            Estate <span className="text-[hsl(280,100%,70%)]">Exchange</span>
          </h1>
        </div>
      </main>
    </HydrateClient>
  );
}
