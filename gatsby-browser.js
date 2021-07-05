import React from 'react'
import Layout from './src/components/Layout'

import "particles.js"

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>
    {element}
  </Layout>
}

export function onInitialClientRender() {
  particlesJS.load('particles-js', '/particlesjs-config.json', function() {
    console.log('callback - particles.js config loaded');
  });
}