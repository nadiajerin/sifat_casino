import { FaHeart } from "react-icons/fa";


export default async function Home() {

  const hotGamesUid = [
    "c7a69ab382bd1ff0e6eb65b90a793bdd",
    "36d20c24669dca7630715f2e0a7c18be",
    "bdfb23c974a2517198c5443adeea77a8",
    "db249defce63610fccabfa829a405232",
    "61d46add6841aad4758288d68015eca6",
    "d505541d522aa5ca01fc5e97cfcf2116",
    "a990de177577a2e6a889aaac5f57b429",
    "780d43c0a98bc8f6a0705976605608c3",
    "edef29b5eda8e2eaf721d7315491c51d",
    "05fc951a633d4c6b4bbe8c429cd63658",
    "8c62471fd4e28c084a61811a3958f7a1",
    "a7f3e5f210523a989a7c6b32f2f1ad42",
    "981f5f9675002fbeaaf24c4128b938d7",
    "d419ec9ab6a23590770fd77b036aed16",
    "25822eb4d6459cc8b39c4f7b69b1bf2c",
    // "cc686634b4f953754b306317799f1f39", //ali baba
    "3aca3084a5c1a8c77c52d6147ee3d2ab",
    "c68b600f660bf3ce16b99ecda3d78600",
    "fffac1d578d7f53cbc67af087bf7911d", //
    "a04d1f3eb8ccec8a4823bdf18e3f0e84", //sprive
    "c6955c14f6c28a6c2a0c28274fec7520"

  ]

  const response = await fetch(`https://api.httpsgamexaglobal.net/api/games`, {
    "headers": {
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjA2LCJhZ2VudF9jb2RlIjoiQUcxNzU2MDQ3OTA0NTcxQ1ZQOCIsInJvbGUiOiJhZmZpbGlhdGUiLCJpYXQiOjE3NjkzNDYwNTd9.nbj3efEYxaZBnK_PTzOlHrPiXumVQNXpPbKbKZifCG4"
    },
    "query": {
      "page": "1",
      "limit": "1000",
      "search": "",
      "provider": "PRAGMATIC",
      "type": "slot|table|card|lottery|sports",
      "status": "active|inactive|maintenance"
    }
  });

  const result = await response.json();

  return (
    <div className="grid grid-cols-10 gap-6 ">
      { result?.games && Array.isArray( result.games) && result?.games
        .slice(0, 50).map((game) => (
          <div key={game.id} className="!h-auto">
            <div className="relative cursor-pointer group rounded-xl overflow-hidden bg-[#001f1f] border border-white/5 transition-all duration-300">

              {/* Game Image */}
              {/* <Image
                                    src={(game?.image_url && game.image_url.trim() !== "") ? game.image_url : "https://via.placeholder.com/300x400?text=No+Image"}
                                    alt={game?.game_name || "Game Image"}
                                    width={500}
                                    height={500}
                                    className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-300"
                                    priority={false}
                                /> */}
              <img src={game?.image_url} alt={game?.game_name}
                className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Heart Icon */}
              <div className="absolute top-2 right-2 p-1.5 rounded-full cursor-pointer hover:bg-black/60 transition-all">
                <FaHeart className="text-white text-[15px]" />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}



