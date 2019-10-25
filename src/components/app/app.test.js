import React from 'react';
import renderer from 'react-test-renderer';
import App from '~/components/app/app';

const FILMS = [
  {
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    image: `fantastic-beasts-the-crimes-of-grindelwald.jpg`
  },
  {
    title: `Aviator`,
    image: `aviator.jpg`
  },
  {
    title: `Bohemian Rhapsody`,
    image: `bohemian-rhapsody.jpg`
  },
  {
    title: `Macbeth`,
    image: `macbeth.jpg`
  },
  {
    title: `Mindhunter`,
    image: `mindhunter.jpg`
  },
  {
    title: `War of the Worlds`,
    image: `war-of-the-worlds.jpg`
  },
  {
    title: `Johnny English`,
    image: `johnny-english.jpg`
  },
  {
    title: `We Need to Talk about Kevin`,
    image: `we-need-to-talk-about-kevin.jpg`
  },
];

it(`App component render correctly`, () => {
  const tree = renderer
    .create(<App filmsList={FILMS}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
