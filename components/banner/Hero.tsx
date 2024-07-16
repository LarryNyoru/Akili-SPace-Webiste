import React from "react";
import { jsx, Box, Container, Heading, Text, Button } from "theme-ui";
import { rgba } from "polished";
import Select from "../select/Select";
import Header from "../header/Header";
// import mapMarker from "/images/icons/map-marker.png";
// import bannerBg from "/images/banner-bg.jpg";

export default function Hero() {
  const options = [
    {
      id: 1,
      label: "Brooklyn, New york",
      value: "Brooklyn, New york",
    },
    {
      id: 2,
      label: "Atlanta, Georgia",
      value: "Atlanta, Georgia",
    },
    {
      id: 3,
      label: "Minneapolis, Minnesota",
      value: "Minneapolis, Minnesota",
    },
    {
      id: 4,
      label: "Chicago, Illinois",
      value: "Chicago, Illinois",
    },
  ];
  return (
    <Box as="section" id="home" sx={styles.section} style={{}}>
      <Header />
      <Container>
        <Box sx={styles.contentWrapper}>
          <Box sx={styles.bannerContent}>
            <Heading as="h1" sx={styles.heroTitle}>
              AKili SPace
            </Heading>
            <Text as="p" sx={styles.desc}>
              <Text as="p" sx={styles.desc}>
                AkiliSpace is a transformative organisation that is focused on
                providing a safe and supportive environment for Adolescents,
                Teenagers and Young Adults to openly discuss mental health
                issues and offer a helping space to promote Mental Health
                wellness and support.
              </Text>
            </Text>

            <Box as="form">
              {/* <Select
                id="location"
                label="Find workplace"
                //defaultValue={options[1].label}
                //sx={styles.select}
                icon={"IMG"}
              >
                {options?.map((option) => (
                  <option value={option.value} key={option.id}>
                    {option.label}
                  </option>
                ))}
              </Select> */}
              <Button type="submit" sx={styles.button} variant="primary">
                Get Help
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

const styles = {
  section: {
    background: "url('/images/banner-bg.jpg') no-repeat center top / cover",
    backgroundSize: ["100%", null, null, null, "cover"],
    minHeight: [null, null, null, null, "50vh", "100vh"],
  },
  contentWrapper: {
    display: "flex",
    //alignItems: "center",
  },
  bannerContent: {
    backgroundColor: rgba("#fff", 0.93),
    boxShadow: [
      "0px 10px 16px rgba(52, 61, 72, 0.12)",
      null,
      null,
      null,
      "none",
    ],
    maxWidth: [null, null, null, 600, 500, null, 650],
    padding: [
      "20px",
      "30px",
      null,
      null,
      null,
      "30px 50px 60px",
      "50px 60px 90px",
    ],
    borderRadius: 5,
    m: ["10px 0 0", null, null, "10px auto 0", "30px 0 0", null, 0],
    "@media only screen and (min-height: 720px) and (max-height: 760px), (min-width: 1501px) and (max-width: 1560px) ":
      {
        maxWidth: 515,
        mt: 70,
        padding: "30px 50px 65px",
      },
  },
  heroTitle: {
    fontSize: [22, 28, 28, 40, , 5, 6],
    fontWeight: 700,
    letterSpacing: "heading",
    lineHeight: [1.4, null, null, null, null, null, 1.57],
    "@media only screen and (min-height: 720px) and (max-height: 760px), (min-width: 1501px) and (max-width: 1560px) ":
      {
        fontSize: 40,
      },
  },
  desc: {
    fontSize: [15, 16, 15, 17],
    lineHeight: [1.53, 1.53, 1.53, 2, 2.4, 2, 2.48],
    maxWidth: 440,
    marginTop: [15, 15, 15, null, null, null, 30],
    "@media only screen and (min-height: 720px) and (max-height: 760px), (min-width: 1501px) and (max-width: 1560px) ":
      {
        mt: 15,
      },
  },
  select: {
    marginTop: 30,
    select: {
      minWidth: ["auto", "auto", "initial"],
    },
  },
  button: {
    fontSize: 20,
    fontWeight: 700,
    marginTop: 20,
    width: "100%",
    minHeight: [50, null, null, null, 60],
    // fontSize: [16, 16, 16, 20],
    ":focus": {
      outline: "0 none",
    },
  },
};
