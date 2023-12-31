import Head from "next/head";
import { GetServerSideProps } from "next";
import { useRouter } from "next/navigation";

import { Grid, Pagination, Stack } from "@mui/material";
import SearchOffIcon from '@mui/icons-material/SearchOff';

import { getCharacters } from "@/lib/character/character";
import { useEffect, useRef, useState } from "react";
import { useDebounce } from "use-debounce";
import { CharacterCard } from "@/components/CharacterCard";
import SearchToolbar from "@/components/SearchToolbar/SearchToolbar";
import { SkeletonCard } from "@/components/Skeleton";
import { PaginationInfo } from "@/lib/types";
import { Character } from "@/lib/character/types";

export interface CharacterStaticProps {
  info: PaginationInfo;
  characters: Character[];
}

export const getServerSideProps: GetServerSideProps<
  CharacterStaticProps
> = async ({ query }) => {
  const characters = await getCharacters({
    page: query.page || 1,
    name: query.search || "",
  });

  return {
    props: {
      info: characters.info,
      characters: characters.results,
      searchParams: {
        page: query.page || 1,
        name: query.search || "",
      },
    },
  };
};

export interface CharactersProps {
  characters: Character[];
  info: PaginationInfo;
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function Characters({
  characters = [],
  info,
  searchParams,
}: CharactersProps) {
  
  const router = useRouter();
  const initialRender = useRef(true);
  const [meta, setMeta] = useState(info);
  const [charactersList, setCharactersList] = useState(characters);
  const [page, setPage] = useState(searchParams?.page);
  const [text, setText] = useState<string | null>(searchParams?.name as string);
  const [isLoading, setIsLoading] = useState(false);
  const [query] = useDebounce(text, 750);

  const handleOnChangePage = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setPage(page.toString());
  };

  const handleOnSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
    setPage("1");
  };

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }

    const urlParams = new URLSearchParams("");

    if (query) {
      urlParams.set("search", query as string);
    }

    if (page) {
      urlParams.set("page", page as string);
    }

    router.push(`?${urlParams.toString()}`);

    setIsLoading(true);
    getCharacters({ page, name: text })
      .then((response) => {
        setCharactersList(response.results);
        setMeta(response.info);
      })
      .finally(() => {
        setIsLoading(false);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, page]);

  return (
    <>
      <Head>
        <title>Characters</title>
        <meta name="description" content="List of Characters from Rick & Morty Serie" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        <SearchToolbar value={text} onChange={handleOnSearch} />

        <Grid container spacing={{ xs:2, sm: 1, md: 3}} padding={{ xs: 2 }}>
          {isLoading ? (
            <SkeletonCard items={11} />
          ) : (
            charactersList.map((character) => (
              <Grid key={character.id} item lg={3} md={4} sm={6} xs={12}>
                <CharacterCard character={character} />
              </Grid>
            ))
          )}
        </Grid>

        {
          info.count === 0 ? (
            <Stack spacing={5} padding={5}  alignItems="center" justifyContent="center">
              <SearchOffIcon sx={{ fontSize: 100 }} />
              <p>No results found for: &quot;<i>{query}</i> &quot; </p>
            </Stack>
          ) : (
            <Stack spacing={5} padding={5} flexDirection="row" justifyContent="center">
              <Pagination
                count={meta?.pages || 1}
                page={Number(page || "1")}
                onChange={handleOnChangePage}
                size="large"
              />
            </Stack>
          )
        }
      </main>
    </>
  );
}
