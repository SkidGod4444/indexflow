/* eslint-disable @next/next/no-img-element */
"use client";
import { Button } from "@/components/ui/button";
import TagName from "@/components/custom/tags.comp";
import AllQuestions from "@/components/custom/all-questions";
import { Suspense, useEffect, useState } from "react";
import { popularTags } from "@/json/dummy";
import { JoinCommunityBtn } from "@/components/custom/join.community.btn";
import { hc } from 'hono/client'
import { ServerType } from "@iflow/types";
import type { ServerApiType } from "@iflow/api";

export default function Home() {
  const [selectedTag, setSelectedTag] = useState("");
  const [servers, setServers] = useState<ServerType[]>([]);
  const [loading, setLoading] = useState(false);

  // const API_ENDPOINT = process.env.NODE_ENV == "development" ? "https://api.indexflow.site/v1/bot/server" : "https://api.indexflow.site/v1/bot/server";
  const API_ENDPOINT = process.env.NODE_ENV == "development" ? "http://localhost:3001/v1/bot/server" : "https://api.indexflow.site/v1/bot/server";

  useEffect(() => {
    const client = hc<ServerApiType>(API_ENDPOINT);
    async function fetchServers() {
      setLoading(true);
      const res = await client.all.$get({ query: { cursor: "", take: 10 } });
      if (res.status === 404) {
        const err: { message: string; status: number } = await res.json();
        setLoading(false);
      } else if (res.ok) {
        const data: { servers: ServerType[] } = await res.json();
        setServers(data.servers);
        setLoading(false);
      }
    }

    if (servers.length === 0) {
      fetchServers();
    }
  }, [servers]);

  return (
    <div className="flex w-full justify-center py-8">
      <div className="flex flex-col gap-4 min-w-[90%] md:container w-full px-4 relative">
        {/* TagName at the top for more space */}
        <div className="bg-card rounded-lg border p-4 w-full">
          <h2 className="text-xl font-semibold mb-4">Popular Tags</h2>
          <TagName tags={popularTags} onTagSelect={setSelectedTag} />
        </div>

        <div className="flex flex-col lg:flex-row gap-4">
          <main className="flex-1 min-w-0 py-5">
            <Suspense fallback={<div>Loading...</div>}>
              <AllQuestions tagName="" selectedTag={selectedTag} />
            </Suspense>
          </main>

          {/* Community Form */}
          <aside className="w-full lg:w-[350px] py-10 space-y-6 sticky lg:top-[100px] h-fit flex-shrink-0">
            <div className="rounded-lg border p-4">
              <h2 className="text-xl font-semibold mb-4">Communities</h2>
              <p className="text-muted-foreground mb-4">
                Get unstuck with the help of our community of developers.
              </p>
              <Button className="w-full mb-4">Join Community</Button>
              {loading ? (
                <div className="space-y-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="flex items-center py-2">
                      <div className="w-10 h-10 rounded-full bg-primary/90 animate-pulse mr-4" />
                      <div className="flex-1">
                        <div className="h-4 bg-primary/60 rounded animate-pulse w-24" />
                      </div>
                      <div className="w-16 h-8 bg-primary/80 rounded animate-pulse" />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="overflow-y-auto max-h-72 overflow-x-hidden scrollbar-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
                  {servers.map(({ id, logo, name, invite_url }) => (
                    <div key={id} className="flex items-center py-2">
                      <img
                        src={logo ?? undefined}
                        alt={name}
                        className="w-10 h-10 rounded-full mr-4 object-cover"
                        loading="lazy"
                      />
                      <div className="flex-1">
                        <h3 className="text-md font-medium truncate max-w-[15ch]">
                          {name}
                        </h3>
                      </div>
                      <JoinCommunityBtn InvUrl={invite_url ?? ''} />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
