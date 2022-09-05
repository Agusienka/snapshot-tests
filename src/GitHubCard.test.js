import { render, screen, CardImg } from '@testing-library/react';
import App from './App';
import renderer from 'react-test-renderer'
import GitHubCard from './GitHubCard';
import React from 'react';

test('renders a snapshot', () => {
    const tree = renderer.create(<GitHubCard/>).toJSON()
    expect(tree).toMatchSnapshot()
  })

  