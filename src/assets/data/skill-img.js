import * as adobeXd from "../skill-img/adobe-xd.svg";
import expressjs from "../skill-img/express-js.svg"
import adobeaudition from '../skill-img/adobeaudition.svg';
import afterEffects from '../skill-img/after-effects.svg';
import angular from '../skill-img/angular.svg';
import aws from '../skill-img/aws.svg';
import azure from '../skill-img/azure.svg';
import blender from '../skill-img/blender.svg';
import bootstrap from '../skill-img/bootstrap.svg';
import bulma from '../skill-img/bulma.svg';
import c from '../skill-img/c.svg';
import canva from '../skill-img/canva.svg';
import capacitorjs from '../skill-img/capacitorjs.svg';
import coffeescript from '../skill-img/coffeescript.svg';
import cplusplus from '../skill-img/cplusplus.svg';
import csharp from '../skill-img/csharp.svg';
import css from '../skill-img/css.svg';
import dart from '../skill-img/dart.svg';
import deno from '../skill-img/deno.svg';
import django from '../skill-img/django.svg';
import docker from '../skill-img/docker.svg';
import fastify from '../skill-img/fastify.svg';
import figma from '../skill-img/figma.svg';
import firebase from '../skill-img/firebase.svg';
import flutter from '../skill-img/flutter.svg';
import gcp from '../skill-img/gcp.svg';
import gimp from '../skill-img/gimp.svg';
import git from '../skill-img/git.svg';
import go from '../skill-img/go.svg';
import graphql from '../skill-img/graphql.svg';
import haxe from '../skill-img/haxe.svg';
import html from '../skill-img/html.svg';
import illustrator from '../skill-img/illustrator.svg';
import ionic from '../skill-img/ionic.svg';
import java from '../skill-img/java.svg';
import javascript from '../skill-img/javascript.svg';
import julia from '../skill-img/julia.svg';
import kotlin from '../skill-img/kotlin.svg';
import lightroom from '../skill-img/lightroom.svg';
import markdown from '../skill-img/markdown.svg';
import materialui from '../skill-img/materialui.svg';
import matlab from '../skill-img/matlab.svg';
import memsql from '../skill-img/memsql.svg';
import microsoftoffice from '../skill-img/microsoftoffice.svg';
import mongoDB from '../skill-img/mongoDB.svg';
import mysql from '../skill-img/mysql.svg';
import nextJS from '../skill-img/nextJS.svg';
import nginx from '../skill-img/nginx.svg';
import nodejs from '../skill-img/nodejs.svg';
import numpy from '../skill-img/numpy.svg';
import nuxtJS from '../skill-img/nuxtJS.svg';
import opencv from '../skill-img/opencv.svg';
import photoshop from '../skill-img/photoshop.svg';
import php from '../skill-img/php.svg';
import picsart from '../skill-img/picsart.svg';
import postgresql from '../skill-img/postgresql.svg';
import premierepro from '../skill-img/premierepro.svg';
import python from '../skill-img/python.svg';
import pytorch from '../skill-img/pytorch.svg';
import react from '../skill-img/react.svg';
import ruby from '../skill-img/ruby.svg';
import selenium from '../skill-img/selenium.svg';
import sketch from '../skill-img/sketch.svg';
import strapi from '../skill-img/strapi.svg';
import svelte from '../skill-img/svelte.svg';
import swift from '../skill-img/swift.svg';
import tailwind from '../skill-img/tailwind.svg';
import tensorflow from '../skill-img/tensorflow.svg';
import typescript from '../skill-img/typescript.svg';
import unity from '../skill-img/unity.svg';
import vitejs from '../skill-img/vitejs.svg';
import vue from '../skill-img/vue.svg';
import vuetifyjs from '../skill-img/vuetifyjs.svg';
import webix from '../skill-img/webix.svg';
import wolframalpha from '../skill-img/wolframalpha.svg';
import wordpress from '../skill-img/wordpress.svg';


export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case 'expressjs':
      return expressjs;
    case 'gcp':
      return gcp;
    case 'html':
      return html;
    case 'photoshop':
      return photoshop;
    case 'docker':
      return docker;
    case 'illustrator':
      return illustrator;
    case 'adobe xd':
      return adobeXd;
    case 'after effects':
      return afterEffects;
    case 'css':
      return css;
    case 'angular':
      return angular;
    case 'javascript':
      return javascript;
    case 'next js':
      return nextJS;
    case 'nuxt js':
      return nuxtJS;
    case 'react':
      return react;
    case 'svelte':
      return svelte;
    case 'typescript':
      return typescript;
    case 'vue':
      return vue;
    case 'bootstrap':
      return bootstrap;
    case 'bulma':
      return bulma;
    case 'capacitorjs':
      return capacitorjs;
    case 'coffeescript':
      return coffeescript;
    case 'memsql':
      return memsql;
    case 'mongodb':
      return mongoDB;
    case 'mysql':
      return mysql;
    case 'postgresql':
      return postgresql;
    case 'tailwind':
      return tailwind;
    case 'vitejs':
      return vitejs;
    case 'vuetifyjs':
      return vuetifyjs;
    case 'c':
      return c;
    case 'c++':
      return cplusplus;
    case 'c#':
      return csharp;
    case 'dart':
      return dart;
    case 'go':
      return go;
    case 'java':
      return java;
    case 'kotlin':
      return kotlin;
    case 'julia':
      return julia;
    case 'matlab':
      return matlab;
    case 'php':
      return php;
    case 'python':
      return python;
    case 'ruby':
      return ruby;
    case 'swift':
      return swift;
    case 'adobe audition':
      return adobeaudition;
    case 'aws':
      return aws;
    case 'deno':
      return deno;
    case 'django':
      return django;
    case 'firebase':
      return firebase;
    case 'gimp':
      return gimp;
    case 'git':
      return git;
    case 'graphql':
      return graphql;
    case 'lightroom':
      return lightroom;
    case 'materialui':
      return materialui;
    case 'nginx':
      return nginx;
    case 'nodejs':
      return nodejs;
    case 'numpy':
      return numpy;
    case 'opencv':
      return opencv;
    case 'premiere pro':
      return premierepro;
    case 'pytorch':
      return pytorch;
    case 'selenium':
      return selenium;
    case 'strapi':
      return strapi;
    case 'tensorflow':
      return tensorflow;
    case 'webix':
      return webix;
    case 'wordpress':
      return wordpress;
    case 'azure':
      return azure;
    case 'blender':
      return blender;
    case 'fastify':
      return fastify;
    case 'figma':
      return figma;
    case 'flutter':
      return flutter;
    case 'haxe':
      return haxe;
    case 'ionic':
      return ionic;
    case 'markdown':
      return markdown;
    case 'microsoft office':
      return microsoftoffice;
    case 'picsart':
      return picsart;
    case 'sketch':
      return sketch;
    case 'unity':
      return unity;
    case 'wolframalpha':
      return wolframalpha;
    case 'canva':
      return canva;
    default:
      break;
  }
}
