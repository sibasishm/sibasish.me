import React from 'react';
import Link from 'next/link';

import links from '../lib/links';

import SVGProvider from './SVGProvider';

const Logo = ({ className, theme }) => {
  return (
    <svg className={className} viewBox="0 0 200 125" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 3H97V122H3V3ZM0 0H3H97H100V3V122V125H97H3H0V122V3V0ZM33.984 110.552C38.304 113.144 43.056 114.44 48.24 114.44C53.424 114.44 58.128 113.192 62.352 110.696C66.672 108.104 70.08 104.648 72.576 100.328C75.168 95.912 76.464 90.968 76.464 85.496C76.464 79.832 75.072 75.08 72.288 71.24C69.504 67.304 65.712 63.992 60.912 61.304C60.624 61.112 59.808 60.68 58.464 60.008C57.216 59.336 55.776 58.568 54.144 57.704C52.512 56.744 50.976 55.928 49.536 55.256C48.192 54.488 47.28 53.96 46.8 53.672C43.248 51.752 40.8 49.736 39.456 47.624C38.112 45.512 37.44 42.872 37.44 39.704C37.44 36.632 38.496 33.992 40.608 31.784C42.72 29.48 45.264 28.328 48.24 28.328C51.12 28.328 53.616 29.384 55.728 31.496C57.84 33.608 58.896 36.344 58.896 39.704L59.04 51.512C59.04 51.896 59.232 52.088 59.616 52.088H75.744C76.128 52.088 76.32 51.896 76.32 51.512V39.704C76.32 34.424 75.024 29.672 72.432 25.448C69.936 21.128 66.528 17.72 62.208 15.224C57.984 12.632 53.328 11.336 48.24 11.336C43.248 11.336 38.592 12.584 34.272 15.08C30.048 17.576 26.64 20.984 24.048 25.304C21.456 29.528 20.16 34.328 20.16 39.704C20.16 45.56 21.408 50.84 23.904 55.544C26.496 60.152 30.432 63.992 35.712 67.064C38.592 68.696 41.664 70.424 44.928 72.248C48.192 74.072 50.592 75.416 52.128 76.28C56.736 78.872 59.04 81.944 59.04 85.496C59.04 88.568 57.984 91.256 55.872 93.56C53.76 95.864 51.216 97.016 48.24 97.016C45.264 97.016 42.72 95.912 40.608 93.704C38.496 91.4 37.44 88.664 37.44 85.496V78.872C37.44 78.392 37.248 78.152 36.864 78.152H20.736C20.256 78.152 20.016 78.392 20.016 78.872V85.496C20.016 90.776 21.264 95.624 23.76 100.04C26.352 104.36 29.76 107.864 33.984 110.552Z"
        fill={theme === 'theme-light' ? '#0f141e' : '#f0f0f0'}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M200 0H100V125H200V0ZM116.76 112.28C116.76 112.76 116.952 113 117.336 113H133.608C133.992 113 134.184 112.76 134.184 112.28L134.328 38.84L149.304 60.728L164.424 38.84L164.568 112.28C164.568 112.76 164.76 113 165.144 113H181.416C181.8 113 181.992 112.76 181.992 112.28L181.704 13.352C181.704 12.968 181.512 12.776 181.128 12.776H163.416C163.032 12.776 162.696 12.968 162.408 13.352L149.304 32.36L136.2 13.352C135.912 12.968 135.576 12.776 135.192 12.776H117.624C117.24 12.776 117.048 12.968 117.048 13.352L116.76 112.28Z"
        fill={theme === 'theme-light' ? '#0f141e' : '#f0f0f0'}
      />
    </svg>
  );
};

const Signature = ({ className }) => {
  return (
    <svg className={className} viewBox="0 0 200 38" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.10809 19.524C3.94809 20.028 4.87209 20.28 5.88009 20.28C6.88809 20.28 7.80276 20.0373 8.62409 19.552C9.46409 19.048 10.1268 18.376 10.6121 17.536C11.1161 16.6773 11.3681 15.716 11.3681 14.652C11.3681 13.5506 11.0974 12.6266 10.5561 11.88C10.0148 11.1146 9.27742 10.4706 8.34409 9.94798C8.28809 9.91065 8.12942 9.82665 7.86809 9.69598C7.62542 9.56531 7.34542 9.41598 7.02809 9.24798C6.71076 9.06131 6.41209 8.90265 6.13209 8.77198C5.87076 8.62265 5.69342 8.51998 5.60009 8.46398C4.90942 8.09065 4.43342 7.69865 4.17209 7.28798C3.91076 6.87731 3.78009 6.36398 3.78009 5.74798C3.78009 5.15065 3.98542 4.63731 4.39609 4.20798C4.80676 3.75998 5.30142 3.53598 5.88009 3.53598C6.44009 3.53598 6.92542 3.74131 7.33609 4.15198C7.74676 4.56265 7.95209 5.09465 7.95209 5.74798L7.98009 8.04398C7.98009 8.11865 8.01742 8.15598 8.09209 8.15598H11.2281C11.3028 8.15598 11.3401 8.11865 11.3401 8.04398V5.74798C11.3401 4.72131 11.0881 3.79731 10.5841 2.97598C10.0988 2.13598 9.43609 1.47331 8.59609 0.987979C7.77476 0.483979 6.86942 0.231979 5.88009 0.231979C4.90942 0.231979 4.00409 0.474646 3.16409 0.95998C2.34276 1.44531 1.68009 2.10798 1.17609 2.94798C0.67209 3.76931 0.42009 4.70265 0.42009 5.74798C0.42009 6.88665 0.662757 7.91331 1.14809 8.82798C1.65209 9.72398 2.41742 10.4706 3.44409 11.068C4.00409 11.3853 4.60142 11.7213 5.23609 12.076C5.87076 12.4306 6.33742 12.692 6.63609 12.86C7.53209 13.364 7.98009 13.9613 7.98009 14.652C7.98009 15.2493 7.77476 15.772 7.36409 16.22C6.95342 16.668 6.45876 16.892 5.88009 16.892C5.30142 16.892 4.80676 16.6773 4.39609 16.248C3.98542 15.8 3.78009 15.268 3.78009 14.652V13.364C3.78009 13.2706 3.74276 13.224 3.66809 13.224H0.53209C0.438757 13.224 0.39209 13.2706 0.39209 13.364V14.652C0.39209 15.6786 0.634757 16.6213 1.12009 17.48C1.62409 18.32 2.28676 19.0013 3.10809 19.524ZM14.7154 19.86C14.7154 19.9533 14.7621 20 14.8554 20H18.0194C18.0941 20 18.1314 19.9533 18.1314 19.86L18.1034 0.623979C18.1034 0.549312 18.0661 0.511979 17.9914 0.511979H14.8554C14.7807 0.511979 14.7434 0.549312 14.7434 0.623979L14.7154 19.86ZM21.9943 19.86C21.9943 19.9533 22.0316 20 22.1063 20H27.1183C28.201 20 29.181 19.7386 30.0583 19.216C30.9543 18.6746 31.6636 17.956 32.1863 17.06C32.709 16.164 32.9703 15.1746 32.9703 14.092C32.9703 13.308 32.821 12.5613 32.5223 11.852C32.2236 11.1426 31.8036 10.5173 31.2623 9.97598C31.7663 9.54665 32.1956 8.98665 32.5503 8.29598C32.9236 7.60531 33.1103 6.85865 33.1103 6.05598C33.1103 5.06665 32.8676 4.15198 32.3823 3.31198C31.897 2.47198 31.2343 1.79998 30.3943 1.29598C29.5543 0.773312 28.6023 0.511979 27.5383 0.511979H22.1623C22.0876 0.511979 22.0503 0.549312 22.0503 0.623979L21.9943 19.86ZM27.5383 8.23998H25.4103V3.84398H27.5383C28.1356 3.84398 28.649 4.06798 29.0783 4.51598C29.5076 4.94531 29.7223 5.45865 29.7223 6.05598C29.7223 6.59731 29.517 7.10131 29.1063 7.56798C28.7143 8.01598 28.1916 8.23998 27.5383 8.23998ZM27.1183 16.584H25.3823L25.4103 11.628H27.1183C27.7903 11.628 28.369 11.8706 28.8543 12.356C29.3396 12.8413 29.5823 13.42 29.5823 14.092C29.5823 14.764 29.3396 15.352 28.8543 15.856C28.369 16.3413 27.7903 16.584 27.1183 16.584ZM38.3557 0.623979L34.8837 19.86C34.8837 19.9533 34.921 20 34.9957 20H38.1037C38.1784 20 38.225 19.9533 38.2437 19.86L38.5517 17.816H42.3597L42.6677 19.86C42.6864 19.9533 42.7331 20 42.8077 20H45.9157C46.009 20 46.0464 19.9533 46.0277 19.86L42.6957 0.623979C42.677 0.549312 42.6304 0.511979 42.5557 0.511979H38.4957C38.4211 0.511979 38.3744 0.549312 38.3557 0.623979ZM41.7997 14.82H39.1117L40.3717 6.95198L40.4837 5.91598L40.6517 6.95198L41.7997 14.82ZM50.6261 19.524C51.4661 20.028 52.3901 20.28 53.3981 20.28C54.4061 20.28 55.3207 20.0373 56.1421 19.552C56.9821 19.048 57.6447 18.376 58.1301 17.536C58.6341 16.6773 58.8861 15.716 58.8861 14.652C58.8861 13.5506 58.6154 12.6266 58.0741 11.88C57.5327 11.1146 56.7954 10.4706 55.8621 9.94798C55.8061 9.91065 55.6474 9.82665 55.3861 9.69598C55.1434 9.56531 54.8634 9.41598 54.5461 9.24798C54.2287 9.06131 53.9301 8.90265 53.6501 8.77198C53.3887 8.62265 53.2114 8.51998 53.1181 8.46398C52.4274 8.09065 51.9514 7.69865 51.6901 7.28798C51.4287 6.87731 51.2981 6.36398 51.2981 5.74798C51.2981 5.15065 51.5034 4.63731 51.9141 4.20798C52.3247 3.75998 52.8194 3.53598 53.3981 3.53598C53.9581 3.53598 54.4434 3.74131 54.8541 4.15198C55.2647 4.56265 55.4701 5.09465 55.4701 5.74798L55.4981 8.04398C55.4981 8.11865 55.5354 8.15598 55.6101 8.15598H58.7461C58.8207 8.15598 58.8581 8.11865 58.8581 8.04398V5.74798C58.8581 4.72131 58.6061 3.79731 58.1021 2.97598C57.6167 2.13598 56.9541 1.47331 56.1141 0.987979C55.2927 0.483979 54.3874 0.231979 53.3981 0.231979C52.4274 0.231979 51.5221 0.474646 50.6821 0.95998C49.8607 1.44531 49.1981 2.10798 48.6941 2.94798C48.1901 3.76931 47.9381 4.70265 47.9381 5.74798C47.9381 6.88665 48.1807 7.91331 48.6661 8.82798C49.1701 9.72398 49.9354 10.4706 50.9621 11.068C51.5221 11.3853 52.1194 11.7213 52.7541 12.076C53.3887 12.4306 53.8554 12.692 54.1541 12.86C55.0501 13.364 55.4981 13.9613 55.4981 14.652C55.4981 15.2493 55.2927 15.772 54.8821 16.22C54.4714 16.668 53.9767 16.892 53.3981 16.892C52.8194 16.892 52.3247 16.6773 51.9141 16.248C51.5034 15.8 51.2981 15.268 51.2981 14.652V13.364C51.2981 13.2706 51.2607 13.224 51.1861 13.224H48.0501C47.9567 13.224 47.9101 13.2706 47.9101 13.364V14.652C47.9101 15.6786 48.1527 16.6213 48.6381 17.48C49.1421 18.32 49.8047 19.0013 50.6261 19.524ZM62.2334 19.86C62.2334 19.9533 62.28 20 62.3734 20H65.5374C65.612 20 65.6494 19.9533 65.6494 19.86L65.6214 0.623979C65.6214 0.549312 65.584 0.511979 65.5094 0.511979H62.3734C62.2987 0.511979 62.2614 0.549312 62.2614 0.623979L62.2334 19.86ZM71.5003 19.524C72.3403 20.028 73.2643 20.28 74.2723 20.28C75.2803 20.28 76.1949 20.0373 77.0163 19.552C77.8563 19.048 78.5189 18.376 79.0043 17.536C79.5083 16.6773 79.7603 15.716 79.7603 14.652C79.7603 13.5506 79.4896 12.6266 78.9483 11.88C78.4069 11.1146 77.6696 10.4706 76.7363 9.94798C76.6803 9.91065 76.5216 9.82665 76.2603 9.69598C76.0176 9.56531 75.7376 9.41598 75.4203 9.24798C75.1029 9.06131 74.8043 8.90265 74.5243 8.77198C74.2629 8.62265 74.0856 8.51998 73.9923 8.46398C73.3016 8.09065 72.8256 7.69865 72.5643 7.28798C72.3029 6.87731 72.1723 6.36398 72.1723 5.74798C72.1723 5.15065 72.3776 4.63731 72.7883 4.20798C73.1989 3.75998 73.6936 3.53598 74.2723 3.53598C74.8323 3.53598 75.3176 3.74131 75.7283 4.15198C76.1389 4.56265 76.3443 5.09465 76.3443 5.74798L76.3723 8.04398C76.3723 8.11865 76.4096 8.15598 76.4843 8.15598H79.6203C79.6949 8.15598 79.7323 8.11865 79.7323 8.04398V5.74798C79.7323 4.72131 79.4803 3.79731 78.9763 2.97598C78.4909 2.13598 77.8283 1.47331 76.9883 0.987979C76.1669 0.483979 75.2616 0.231979 74.2723 0.231979C73.3016 0.231979 72.3963 0.474646 71.5563 0.95998C70.7349 1.44531 70.0723 2.10798 69.5683 2.94798C69.0643 3.76931 68.8123 4.70265 68.8123 5.74798C68.8123 6.88665 69.0549 7.91331 69.5403 8.82798C70.0443 9.72398 70.8096 10.4706 71.8363 11.068C72.3963 11.3853 72.9936 11.7213 73.6283 12.076C74.2629 12.4306 74.7296 12.692 75.0283 12.86C75.9243 13.364 76.3723 13.9613 76.3723 14.652C76.3723 15.2493 76.1669 15.772 75.7563 16.22C75.3456 16.668 74.8509 16.892 74.2723 16.892C73.6936 16.892 73.1989 16.6773 72.7883 16.248C72.3776 15.8 72.1723 15.268 72.1723 14.652V13.364C72.1723 13.2706 72.1349 13.224 72.0603 13.224H68.9243C68.8309 13.224 68.7843 13.2706 68.7843 13.364V14.652C68.7843 15.6786 69.0269 16.6213 69.5123 17.48C70.0163 18.32 70.6789 19.0013 71.5003 19.524ZM83.1076 19.86C83.1076 19.9533 83.1449 20 83.2196 20H86.3836C86.4583 20 86.4956 19.9533 86.4956 19.86V11.628H90.6956V19.86C90.6956 19.9533 90.7423 20 90.8356 20H93.9716C94.0649 20 94.1116 19.9533 94.1116 19.86L94.0556 0.623979C94.0556 0.549312 94.0089 0.511979 93.9156 0.511979H90.8076C90.7329 0.511979 90.6956 0.549312 90.6956 0.623979V8.23998H86.4956L86.5236 0.623979C86.5236 0.549312 86.4769 0.511979 86.3836 0.511979H83.2756C83.1823 0.511979 83.1356 0.549312 83.1356 0.623979L83.1076 19.86ZM103.353 19.86C103.353 19.9533 103.39 20 103.465 20H106.629C106.704 20 106.741 19.9533 106.741 19.86L106.769 5.57998L109.681 9.83598L112.621 5.57998L112.649 19.86C112.649 19.9533 112.686 20 112.761 20H115.925C116 20 116.037 19.9533 116.037 19.86L115.981 0.623979C115.981 0.549312 115.944 0.511979 115.869 0.511979H112.425C112.35 0.511979 112.285 0.549312 112.229 0.623979L109.681 4.31998L107.133 0.623979C107.077 0.549312 107.012 0.511979 106.937 0.511979H103.521C103.446 0.511979 103.409 0.549312 103.409 0.623979L103.353 19.86ZM122.2 19.524C123.04 20.028 123.964 20.28 124.972 20.28C125.98 20.28 126.895 20.028 127.716 19.524C128.556 19.0013 129.219 18.32 129.704 17.48C130.208 16.6213 130.46 15.6786 130.46 14.652L130.432 5.77598C130.432 4.74931 130.18 3.81598 129.676 2.97598C129.191 2.13598 128.537 1.46398 127.716 0.95998C126.895 0.45598 125.98 0.203979 124.972 0.203979C123.983 0.203979 123.068 0.45598 122.228 0.95998C121.388 1.46398 120.716 2.13598 120.212 2.97598C119.727 3.81598 119.484 4.74931 119.484 5.77598L119.456 14.652C119.456 15.6786 119.708 16.6213 120.212 17.48C120.716 18.32 121.379 19.0013 122.2 19.524ZM126.428 16.22C126.017 16.668 125.532 16.892 124.972 16.892C124.393 16.892 123.899 16.6773 123.488 16.248C123.077 15.8 122.872 15.268 122.872 14.652V5.77598C122.872 5.14131 123.077 4.61865 123.488 4.20798C123.899 3.77865 124.393 3.56398 124.972 3.56398C125.569 3.56398 126.064 3.77865 126.456 4.20798C126.848 4.63731 127.044 5.15998 127.044 5.77598L127.072 14.652C127.072 15.2306 126.857 15.7533 126.428 16.22ZM133.989 19.86C133.989 19.9533 134.026 20 134.101 20H137.265C137.34 20 137.377 19.9533 137.377 19.86V11.628H141.577V19.86C141.577 19.9533 141.624 20 141.717 20H144.853C144.946 20 144.993 19.9533 144.993 19.86L144.937 0.623979C144.937 0.549312 144.89 0.511979 144.797 0.511979H141.689C141.614 0.511979 141.577 0.549312 141.577 0.623979V8.23998H137.377L137.405 0.623979C137.405 0.549312 137.358 0.511979 137.265 0.511979H134.157C134.064 0.511979 134.017 0.549312 134.017 0.623979L133.989 19.86ZM151.198 0.623979L147.726 19.86C147.726 19.9533 147.763 20 147.838 20H150.946C151.021 20 151.067 19.9533 151.086 19.86L151.394 17.816H155.202L155.51 19.86C155.529 19.9533 155.575 20 155.65 20H158.758C158.851 20 158.889 19.9533 158.87 19.86L155.538 0.623979C155.519 0.549312 155.473 0.511979 155.398 0.511979H151.338C151.263 0.511979 151.217 0.549312 151.198 0.623979ZM154.642 14.82H151.954L153.214 6.95198L153.326 5.91598L153.494 6.95198L154.642 14.82ZM162.055 19.804C162.055 19.9346 162.13 20 162.279 20H165.079C165.247 20 165.331 19.9253 165.331 19.776L165.135 9.69598L169.979 20H172.443C172.536 20 172.583 19.944 172.583 19.832L172.555 0.735979C172.555 0.586646 172.499 0.511979 172.387 0.511979H169.615C169.447 0.511979 169.363 0.586646 169.363 0.735979L169.503 11.544L164.771 0.511979H162.251C162.102 0.511979 162.027 0.586646 162.027 0.735979L162.055 19.804ZM179.103 19.86C179.103 19.9533 179.141 20 179.215 20H182.379C182.454 20 182.491 19.9533 182.491 19.86L182.463 3.89998H186.131C186.206 3.89998 186.243 3.85331 186.243 3.75998V0.623979C186.243 0.549312 186.197 0.511979 186.103 0.511979H175.463C175.389 0.511979 175.351 0.549312 175.351 0.623979L175.323 3.75998C175.323 3.85331 175.37 3.89998 175.463 3.89998H179.103V19.86ZM191.546 19.888C191.546 19.9626 191.574 20 191.63 20H194.85C194.925 20 194.962 19.9626 194.962 19.888L194.934 11.824L198.714 0.623979C198.733 0.549312 198.705 0.511979 198.63 0.511979H195.494C195.42 0.511979 195.373 0.549312 195.354 0.623979L193.254 8.15598L191.182 0.623979C191.164 0.549312 191.108 0.511979 191.014 0.511979H187.906C187.832 0.511979 187.804 0.549312 187.822 0.623979L191.574 11.936L191.546 19.888ZM0.56009 36.93C0.56009 36.9766 0.583423 37 0.63009 37H2.19809C2.24476 37 2.26809 36.9766 2.26809 36.93V32.828H5.13809C5.18476 32.828 5.20809 32.8093 5.20809 32.772L5.19409 31.19C5.19409 31.1433 5.17542 31.12 5.13809 31.12H2.26809V28.95H5.13809C5.17542 28.95 5.19409 28.9313 5.19409 28.894V27.312C5.19409 27.2746 5.17076 27.256 5.12409 27.256H0.64409C0.606757 27.256 0.58809 27.2746 0.58809 27.312L0.56009 36.93ZM8.21667 36.762C8.63667 37.014 9.094 37.14 9.58867 37.14C10.102 37.14 10.564 37.014 10.9747 36.762C11.3947 36.51 11.726 36.1693 11.9687 35.74C12.2207 35.3106 12.3467 34.8346 12.3467 34.312L12.3187 27.312C12.3187 27.2746 12.3 27.256 12.2627 27.256H10.6947C10.6573 27.256 10.6387 27.2746 10.6387 27.312V34.312C10.6387 34.6293 10.536 34.9 10.3307 35.124C10.1347 35.3386 9.88733 35.446 9.58867 35.446C9.29933 35.446 9.052 35.3386 8.84667 35.124C8.65067 34.9 8.55267 34.6293 8.55267 34.312V27.312C8.55267 27.2746 8.534 27.256 8.49667 27.256H6.92867C6.89133 27.256 6.87267 27.2746 6.87267 27.312L6.84467 34.312C6.84467 34.8253 6.966 35.2966 7.20867 35.726C7.46067 36.1553 7.79667 36.5006 8.21667 36.762ZM14.0121 36.93C14.0121 36.9766 14.0308 37 14.0681 37H18.5901C18.6368 37 18.6601 36.9766 18.6601 36.93V35.348C18.6601 35.3013 18.6368 35.278 18.5901 35.278H15.7061L15.7201 27.326C15.7201 27.2793 15.6968 27.256 15.6501 27.256H14.0961C14.0495 27.256 14.0261 27.2793 14.0261 27.326L14.0121 36.93ZM20.1366 36.93C20.1366 36.9766 20.1552 37 20.1926 37H24.7146C24.7612 37 24.7846 36.9766 24.7846 36.93V35.348C24.7846 35.3013 24.7612 35.278 24.7146 35.278H21.8306L21.8446 27.326C21.8446 27.2793 21.8212 27.256 21.7746 27.256H20.2206C20.1739 27.256 20.1506 27.2793 20.1506 27.326L20.1366 36.93ZM29.3326 36.762C29.7526 37.014 30.2146 37.14 30.7186 37.14C31.2226 37.14 31.6799 37.0186 32.0906 36.776C32.5106 36.524 32.8419 36.188 33.0846 35.768C33.3366 35.3386 33.4626 34.858 33.4626 34.326C33.4626 33.7753 33.3273 33.3133 33.0566 32.94C32.7859 32.5573 32.4173 32.2353 31.9506 31.974C31.9226 31.9553 31.8433 31.9133 31.7126 31.848C31.5913 31.7826 31.4513 31.708 31.2926 31.624C31.1339 31.5306 30.9846 31.4513 30.8446 31.386C30.7139 31.3113 30.6253 31.26 30.5786 31.232C30.2333 31.0453 29.9953 30.8493 29.8646 30.644C29.7339 30.4386 29.6686 30.182 29.6686 29.874C29.6686 29.5753 29.7713 29.3186 29.9766 29.104C30.1819 28.88 30.4293 28.768 30.7186 28.768C30.9986 28.768 31.2413 28.8706 31.4466 29.076C31.6519 29.2813 31.7546 29.5473 31.7546 29.874L31.7686 31.022C31.7686 31.0593 31.7873 31.078 31.8246 31.078H33.3926C33.4299 31.078 33.4486 31.0593 33.4486 31.022V29.874C33.4486 29.3606 33.3226 28.8986 33.0706 28.488C32.8279 28.068 32.4966 27.7366 32.0766 27.494C31.6659 27.242 31.2133 27.116 30.7186 27.116C30.2333 27.116 29.7806 27.2373 29.3606 27.48C28.9499 27.7226 28.6186 28.054 28.3666 28.474C28.1146 28.8846 27.9886 29.3513 27.9886 29.874C27.9886 30.4433 28.1099 30.9566 28.3526 31.414C28.6046 31.862 28.9873 32.2353 29.5006 32.534C29.7806 32.6926 30.0793 32.8606 30.3966 33.038C30.7139 33.2153 30.9473 33.346 31.0966 33.43C31.5446 33.682 31.7686 33.9806 31.7686 34.326C31.7686 34.6246 31.6659 34.886 31.4606 35.11C31.2553 35.334 31.0079 35.446 30.7186 35.446C30.4293 35.446 30.1819 35.3386 29.9766 35.124C29.7713 34.9 29.6686 34.634 29.6686 34.326V33.682C29.6686 33.6353 29.6499 33.612 29.6126 33.612H28.0446C27.9979 33.612 27.9746 33.6353 27.9746 33.682V34.326C27.9746 34.8393 28.0959 35.3106 28.3386 35.74C28.5906 36.16 28.9219 36.5006 29.3326 36.762ZM36.2719 36.93C36.2719 36.9766 36.2906 37 36.3279 37H37.9099C37.9472 37 37.9659 36.9766 37.9659 36.93L37.9519 28.95H39.7859C39.8232 28.95 39.8419 28.9266 39.8419 28.88V27.312C39.8419 27.2746 39.8186 27.256 39.7719 27.256H34.4519C34.4146 27.256 34.3959 27.2746 34.3959 27.312L34.3819 28.88C34.3819 28.9266 34.4052 28.95 34.4519 28.95H36.2719V36.93ZM41.7108 27.312L39.9748 36.93C39.9748 36.9766 39.9935 37 40.0308 37H41.5848C41.6221 37 41.6455 36.9766 41.6548 36.93L41.8088 35.908H43.7128L43.8668 36.93C43.8761 36.9766 43.8995 37 43.9368 37H45.4908C45.5375 37 45.5561 36.9766 45.5468 36.93L43.8808 27.312C43.8715 27.2746 43.8481 27.256 43.8108 27.256H41.7808C41.7435 27.256 41.7201 27.2746 41.7108 27.312ZM43.4328 34.41H42.0888L42.7188 30.476L42.7748 29.958L42.8588 30.476L43.4328 34.41ZM47.888 36.762C48.308 37.014 48.7746 37.14 49.288 37.14C49.8013 37.14 50.2633 37.014 50.674 36.762C51.0846 36.5006 51.4113 36.1553 51.654 35.726C51.906 35.2966 52.032 34.816 52.032 34.284V33.64C52.032 33.6026 52.0133 33.584 51.976 33.584H50.394C50.3566 33.584 50.338 33.6026 50.338 33.64V34.284C50.338 34.5826 50.2353 34.8533 50.03 35.096C49.834 35.3293 49.5866 35.446 49.288 35.446C48.9986 35.446 48.7513 35.3386 48.546 35.124C48.35 34.9093 48.252 34.6293 48.252 34.284V29.916C48.252 29.6173 48.3406 29.356 48.518 29.132C48.6953 28.8986 48.952 28.782 49.288 28.782C49.5866 28.782 49.834 28.894 50.03 29.118C50.2353 29.342 50.338 29.608 50.338 29.916V30.56C50.338 30.5973 50.3566 30.616 50.394 30.616H51.962C51.9993 30.616 52.018 30.5973 52.018 30.56V29.916C52.018 29.3933 51.8966 28.922 51.654 28.502C51.4113 28.0726 51.0846 27.732 50.674 27.48C50.2633 27.228 49.8013 27.102 49.288 27.102C48.7746 27.102 48.308 27.2326 47.888 27.494C47.4773 27.746 47.1506 28.0866 46.908 28.516C46.6746 28.936 46.558 29.4026 46.558 29.916L46.544 34.284C46.544 34.816 46.6653 35.2966 46.908 35.726C47.1506 36.1553 47.4773 36.5006 47.888 36.762ZM53.6157 36.93C53.6157 36.9766 53.6344 37 53.6717 37H55.2537C55.291 37 55.3097 36.9766 55.3097 36.93V33.598L55.7997 32.828L57.6897 36.944C57.6991 36.9813 57.7271 37 57.7737 37H59.4817C59.5471 37 59.5704 36.9813 59.5517 36.944L56.8357 31.176L59.2577 27.312C59.2764 27.2746 59.267 27.256 59.2297 27.256H57.6197C57.5824 27.256 57.5497 27.2746 57.5217 27.312L55.3237 30.644V27.326C55.3237 27.2793 55.305 27.256 55.2677 27.256H53.6997C53.6624 27.256 53.6437 27.2793 53.6437 27.326L53.6157 36.93ZM63.3763 36.93C63.3763 36.9766 63.3997 37 63.4463 37L65.9523 36.986C66.503 36.9766 66.9977 36.8413 67.4363 36.58C67.875 36.3186 68.225 35.9686 68.4863 35.53C68.7477 35.082 68.8783 34.5873 68.8783 34.046V30.028C68.8783 29.5146 68.7523 29.048 68.5003 28.628C68.2483 28.1986 67.9077 27.858 67.4783 27.606C67.0583 27.354 66.5917 27.2326 66.0783 27.242L63.4603 27.256C63.423 27.256 63.4043 27.2746 63.4043 27.312L63.3763 36.93ZM65.9523 35.278H65.0843L65.0983 28.936L66.0783 28.922C66.377 28.9126 66.6337 29.02 66.8483 29.244C67.0723 29.4586 67.1843 29.7153 67.1843 30.014V34.046C67.1843 34.382 67.063 34.6713 66.8203 34.914C66.587 35.1566 66.2977 35.278 65.9523 35.278ZM70.5399 36.93C70.5399 36.9766 70.5585 37 70.5959 37H75.1179C75.1552 37 75.1739 36.9813 75.1739 36.944V35.348C75.1739 35.3013 75.1552 35.278 75.1179 35.278H72.2339V32.828H75.1179C75.1552 32.828 75.1739 32.8093 75.1739 32.772L75.1599 31.19C75.1599 31.1526 75.1412 31.134 75.1039 31.134H72.2339V28.95H75.1039C75.1412 28.95 75.1599 28.9313 75.1599 28.894V27.326C75.1599 27.2793 75.1412 27.256 75.1039 27.256H70.6099C70.5725 27.256 70.5539 27.2746 70.5539 27.312L70.5399 36.93ZM78.4768 36.93C78.4861 36.9766 78.5094 37 78.5468 37H80.2408C80.2781 37 80.3014 36.9766 80.3108 36.93L82.2148 27.312C82.2241 27.2746 82.2054 27.256 82.1588 27.256H80.5908C80.5534 27.256 80.5301 27.2746 80.5208 27.312L79.4008 33.724L78.2528 27.312C78.2434 27.2746 78.2201 27.256 78.1828 27.256H76.6008C76.5541 27.256 76.5354 27.2746 76.5448 27.312L78.4768 36.93ZM83.5954 36.93C83.5954 36.9766 83.6141 37 83.6514 37H88.1734C88.2107 37 88.2294 36.9813 88.2294 36.944V35.348C88.2294 35.3013 88.2107 35.278 88.1734 35.278H85.2894V32.828H88.1734C88.2107 32.828 88.2294 32.8093 88.2294 32.772L88.2154 31.19C88.2154 31.1526 88.1967 31.134 88.1594 31.134H85.2894V28.95H88.1594C88.1967 28.95 88.2154 28.9313 88.2154 28.894V27.326C88.2154 27.2793 88.1967 27.256 88.1594 27.256H83.6654C83.6281 27.256 83.6094 27.2746 83.6094 27.312L83.5954 36.93ZM90.0343 36.93C90.0343 36.9766 90.053 37 90.0903 37H94.6123C94.659 37 94.6823 36.9766 94.6823 36.93V35.348C94.6823 35.3013 94.659 35.278 94.6123 35.278H91.7283L91.7423 27.326C91.7423 27.2793 91.719 27.256 91.6723 27.256H90.1183C90.0716 27.256 90.0483 27.2793 90.0483 27.326L90.0343 36.93ZM97.1714 36.762C97.5914 37.014 98.0534 37.14 98.5574 37.14C99.0614 37.14 99.5187 37.014 99.9294 36.762C100.349 36.5006 100.681 36.16 100.923 35.74C101.175 35.3106 101.301 34.8393 101.301 34.326L101.287 29.888C101.287 29.3746 101.161 28.908 100.909 28.488C100.667 28.068 100.34 27.732 99.9294 27.48C99.5187 27.228 99.0614 27.102 98.5574 27.102C98.0627 27.102 97.6054 27.228 97.1854 27.48C96.7654 27.732 96.4294 28.068 96.1774 28.488C95.9347 28.908 95.8134 29.3746 95.8134 29.888L95.7994 34.326C95.7994 34.8393 95.9254 35.3106 96.1774 35.74C96.4294 36.16 96.7607 36.5006 97.1714 36.762ZM99.2854 35.11C99.08 35.334 98.8374 35.446 98.5574 35.446C98.268 35.446 98.0207 35.3386 97.8154 35.124C97.61 34.9 97.5074 34.634 97.5074 34.326V29.888C97.5074 29.5706 97.61 29.3093 97.8154 29.104C98.0207 28.8893 98.268 28.782 98.5574 28.782C98.856 28.782 99.1034 28.8893 99.2994 29.104C99.4954 29.3186 99.5934 29.58 99.5934 29.888L99.6074 34.326C99.6074 34.6153 99.5 34.8766 99.2854 35.11ZM102.926 36.93C102.926 36.9766 102.944 37 102.982 37H107.504C107.541 37 107.56 36.9813 107.56 36.944V35.348C107.56 35.3013 107.541 35.278 107.504 35.278H104.62V32.828H107.504C107.541 32.828 107.56 32.8093 107.56 32.772L107.546 31.19C107.546 31.1526 107.527 31.134 107.49 31.134H104.62V28.95H107.49C107.527 28.95 107.546 28.9313 107.546 28.894V27.326C107.546 27.2793 107.527 27.256 107.49 27.256H102.996C102.958 27.256 102.94 27.2746 102.94 27.312L102.926 36.93ZM109.365 36.93C109.365 36.9766 109.388 37 109.435 37H111.003C111.049 37 111.073 36.9766 111.073 36.93V33.402H112.137C112.631 33.402 113.089 33.2713 113.509 33.01C113.929 32.7486 114.269 32.3753 114.531 31.89C114.792 31.4046 114.923 30.8306 114.923 30.168C114.923 29.272 114.671 28.5626 114.167 28.04C113.672 27.5173 112.995 27.256 112.137 27.256H109.449C109.411 27.256 109.393 27.2746 109.393 27.312L109.365 36.93ZM112.137 31.708H111.073V28.936L112.137 28.922C112.482 28.922 112.753 29.0386 112.949 29.272C113.145 29.5053 113.243 29.804 113.243 30.168C113.243 30.6253 113.131 30.9986 112.907 31.288C112.692 31.568 112.435 31.708 112.137 31.708ZM116.323 36.93C116.323 36.9766 116.342 37 116.379 37H117.961C117.998 37 118.017 36.9766 118.017 36.93L118.031 32.814H118.955C119.3 32.814 119.59 32.94 119.823 33.192C120.066 33.4346 120.187 33.724 120.187 34.06V36.958C120.187 36.986 120.206 37 120.243 37H121.825C121.872 37 121.895 36.9766 121.895 36.93L121.881 34.06C121.881 33.304 121.629 32.646 121.125 32.086C121.237 31.9926 121.363 31.8526 121.503 31.666C121.643 31.47 121.764 31.2366 121.867 30.966C121.97 30.686 122.021 30.3733 122.021 30.028C122.021 29.5053 121.895 29.0386 121.643 28.628C121.391 28.208 121.05 27.8766 120.621 27.634C120.201 27.382 119.739 27.256 119.235 27.256H116.407C116.37 27.256 116.351 27.2746 116.351 27.312L116.323 36.93ZM119.235 31.134H118.031V28.936H119.235C119.534 28.936 119.79 29.0433 120.005 29.258C120.229 29.4726 120.341 29.7293 120.341 30.028C120.341 30.336 120.229 30.5973 120.005 30.812C119.781 31.0266 119.524 31.134 119.235 31.134ZM127.199 36.608C127.619 36.8786 128.104 37.014 128.655 37.014L131.147 37C131.185 37 131.203 36.9813 131.203 36.944L131.217 32.562H132.449C132.487 32.562 132.505 32.5433 132.505 32.506V30.952C132.505 30.9053 132.482 30.882 132.435 30.882H128.627C128.338 30.882 128.118 30.7933 127.969 30.616C127.829 30.4386 127.759 30.1913 127.759 29.874C127.759 29.6126 127.843 29.3886 128.011 29.202C128.189 29.0153 128.394 28.922 128.627 28.922H130.531C130.587 28.922 130.615 28.894 130.615 28.838V27.354C130.615 27.2886 130.583 27.256 130.517 27.256H128.627C128.151 27.256 127.717 27.3726 127.325 27.606C126.943 27.8393 126.635 28.1566 126.401 28.558C126.177 28.95 126.065 29.3886 126.065 29.874C126.065 30.2566 126.121 30.6066 126.233 30.924C126.345 31.232 126.499 31.4933 126.695 31.708C126.453 31.9413 126.257 32.2073 126.107 32.506C125.958 32.8046 125.883 33.1126 125.883 33.43V34.354C125.883 34.7646 126 35.1753 126.233 35.586C126.467 35.9966 126.789 36.3373 127.199 36.608ZM129.565 35.32L128.655 35.334C128.431 35.334 128.235 35.2826 128.067 35.18C127.899 35.0773 127.769 34.9513 127.675 34.802C127.591 34.6433 127.549 34.494 127.549 34.354V33.43C127.549 33.3086 127.596 33.1826 127.689 33.052C127.783 32.9213 127.909 32.8093 128.067 32.716C128.235 32.6133 128.417 32.562 128.613 32.562H129.579L129.565 35.32ZM137.636 36.762C138.056 37.014 138.514 37.14 139.008 37.14C139.522 37.14 139.984 37.014 140.394 36.762C140.814 36.51 141.146 36.1693 141.388 35.74C141.64 35.3106 141.766 34.8346 141.766 34.312L141.738 27.312C141.738 27.2746 141.72 27.256 141.682 27.256H140.114C140.077 27.256 140.058 27.2746 140.058 27.312V34.312C140.058 34.6293 139.956 34.9 139.75 35.124C139.554 35.3386 139.307 35.446 139.008 35.446C138.719 35.446 138.472 35.3386 138.266 35.124C138.07 34.9 137.972 34.6293 137.972 34.312V27.312C137.972 27.2746 137.954 27.256 137.916 27.256H136.348C136.311 27.256 136.292 27.2746 136.292 27.312L136.264 34.312C136.264 34.8253 136.386 35.2966 136.628 35.726C136.88 36.1553 137.216 36.5006 137.636 36.762ZM143.432 36.93C143.432 36.9766 143.455 37 143.502 37H145.084C145.121 37 145.14 36.9766 145.14 36.93L145.126 27.312C145.126 27.2746 145.107 27.256 145.07 27.256H143.502C143.464 27.256 143.446 27.2746 143.446 27.312L143.432 36.93ZM149.569 36.93C149.569 36.9766 149.593 37 149.639 37L152.145 36.986C152.696 36.9766 153.191 36.8413 153.629 36.58C154.068 36.3186 154.418 35.9686 154.679 35.53C154.941 35.082 155.071 34.5873 155.071 34.046V30.028C155.071 29.5146 154.945 29.048 154.693 28.628C154.441 28.1986 154.101 27.858 153.671 27.606C153.251 27.354 152.785 27.2326 152.271 27.242L149.653 27.256C149.616 27.256 149.597 27.2746 149.597 27.312L149.569 36.93ZM152.145 35.278H151.277L151.291 28.936L152.271 28.922C152.57 28.9126 152.827 29.02 153.041 29.244C153.265 29.4586 153.377 29.7153 153.377 30.014V34.046C153.377 34.382 153.256 34.6713 153.013 34.914C152.78 35.1566 152.491 35.278 152.145 35.278ZM156.733 36.93C156.733 36.9766 156.751 37 156.789 37H161.311C161.348 37 161.367 36.9813 161.367 36.944V35.348C161.367 35.3013 161.348 35.278 161.311 35.278H158.427V32.828H161.311C161.348 32.828 161.367 32.8093 161.367 32.772L161.353 31.19C161.353 31.1526 161.334 31.134 161.297 31.134H158.427V28.95H161.297C161.334 28.95 161.353 28.9313 161.353 28.894V27.326C161.353 27.2793 161.334 27.256 161.297 27.256H156.803C156.765 27.256 156.747 27.2746 156.747 27.312L156.733 36.93ZM164.084 36.762C164.504 37.014 164.966 37.14 165.47 37.14C165.974 37.14 166.431 37.0186 166.842 36.776C167.262 36.524 167.593 36.188 167.836 35.768C168.088 35.3386 168.214 34.858 168.214 34.326C168.214 33.7753 168.078 33.3133 167.808 32.94C167.537 32.5573 167.168 32.2353 166.702 31.974C166.674 31.9553 166.594 31.9133 166.464 31.848C166.342 31.7826 166.202 31.708 166.044 31.624C165.885 31.5306 165.736 31.4513 165.596 31.386C165.465 31.3113 165.376 31.26 165.33 31.232C164.984 31.0453 164.746 30.8493 164.616 30.644C164.485 30.4386 164.42 30.182 164.42 29.874C164.42 29.5753 164.522 29.3186 164.728 29.104C164.933 28.88 165.18 28.768 165.47 28.768C165.75 28.768 165.992 28.8706 166.198 29.076C166.403 29.2813 166.506 29.5473 166.506 29.874L166.52 31.022C166.52 31.0593 166.538 31.078 166.576 31.078H168.144C168.181 31.078 168.2 31.0593 168.2 31.022V29.874C168.2 29.3606 168.074 28.8986 167.822 28.488C167.579 28.068 167.248 27.7366 166.828 27.494C166.417 27.242 165.964 27.116 165.47 27.116C164.984 27.116 164.532 27.2373 164.112 27.48C163.701 27.7226 163.37 28.054 163.118 28.474C162.866 28.8846 162.74 29.3513 162.74 29.874C162.74 30.4433 162.861 30.9566 163.104 31.414C163.356 31.862 163.738 32.2353 164.252 32.534C164.532 32.6926 164.83 32.8606 165.148 33.038C165.465 33.2153 165.698 33.346 165.848 33.43C166.296 33.682 166.52 33.9806 166.52 34.326C166.52 34.6246 166.417 34.886 166.212 35.11C166.006 35.334 165.759 35.446 165.47 35.446C165.18 35.446 164.933 35.3386 164.728 35.124C164.522 34.9 164.42 34.634 164.42 34.326V33.682C164.42 33.6353 164.401 33.612 164.364 33.612H162.796C162.749 33.612 162.726 33.6353 162.726 33.682V34.326C162.726 34.8393 162.847 35.3106 163.09 35.74C163.342 36.16 163.673 36.5006 164.084 36.762ZM169.747 36.93C169.747 36.9766 169.771 37 169.817 37H171.399C171.437 37 171.455 36.9766 171.455 36.93L171.441 27.312C171.441 27.2746 171.423 27.256 171.385 27.256H169.817C169.78 27.256 169.761 27.2746 169.761 27.312L169.747 36.93ZM174.437 36.762C174.847 37.014 175.305 37.14 175.809 37.14C176.322 37.14 176.784 37.014 177.195 36.762C177.605 36.51 177.932 36.174 178.175 35.754C178.427 35.3246 178.553 34.8486 178.553 34.326V32.002C178.553 31.9553 178.534 31.932 178.497 31.932H175.879C175.832 31.932 175.809 31.9553 175.809 32.002V33.57C175.809 33.6166 175.832 33.64 175.879 33.64H176.859V34.326C176.859 34.6433 176.756 34.9093 176.551 35.124C176.355 35.3386 176.107 35.446 175.809 35.446C175.529 35.446 175.286 35.3386 175.081 35.124C174.875 34.9 174.773 34.634 174.773 34.326V29.888C174.773 29.5893 174.875 29.328 175.081 29.104C175.295 28.88 175.538 28.768 175.809 28.768C176.107 28.768 176.355 28.8846 176.551 29.118C176.756 29.3513 176.859 29.6453 176.859 30V30.532C176.859 30.5693 176.877 30.588 176.915 30.588H178.483C178.529 30.588 178.553 30.5693 178.553 30.532V29.888C178.553 29.3653 178.431 28.894 178.189 28.474C177.946 28.054 177.615 27.7226 177.195 27.48C176.784 27.228 176.322 27.102 175.809 27.102C175.314 27.102 174.857 27.228 174.437 27.48C174.026 27.732 173.695 28.0726 173.443 28.502C173.2 28.922 173.079 29.384 173.079 29.888V34.326C173.079 34.8486 173.2 35.3246 173.443 35.754C173.695 36.174 174.026 36.51 174.437 36.762ZM180.124 36.902C180.124 36.9673 180.161 37 180.236 37H181.636C181.72 37 181.762 36.9626 181.762 36.888L181.664 31.848L184.086 37H185.318C185.364 37 185.388 36.972 185.388 36.916L185.374 27.368C185.374 27.2933 185.346 27.256 185.29 27.256H183.904C183.82 27.256 183.778 27.2933 183.778 27.368L183.848 32.772L181.482 27.256H180.222C180.147 27.256 180.11 27.2933 180.11 27.368L180.124 36.902ZM187.164 36.93C187.164 36.9766 187.182 37 187.22 37H191.742C191.779 37 191.798 36.9813 191.798 36.944V35.348C191.798 35.3013 191.779 35.278 191.742 35.278H188.858V32.828H191.742C191.779 32.828 191.798 32.8093 191.798 32.772L191.784 31.19C191.784 31.1526 191.765 31.134 191.728 31.134H188.858V28.95H191.728C191.765 28.95 191.784 28.9313 191.784 28.894V27.326C191.784 27.2793 191.765 27.256 191.728 27.256H187.234C187.196 27.256 187.178 27.2746 187.178 27.312L187.164 36.93ZM193.603 36.93C193.603 36.9766 193.621 37 193.659 37H195.241C195.278 37 195.297 36.9766 195.297 36.93L195.311 32.814H196.235C196.58 32.814 196.869 32.94 197.103 33.192C197.345 33.4346 197.467 33.724 197.467 34.06V36.958C197.467 36.986 197.485 37 197.523 37H199.105C199.151 37 199.175 36.9766 199.175 36.93L199.161 34.06C199.161 33.304 198.909 32.646 198.405 32.086C198.517 31.9926 198.643 31.8526 198.783 31.666C198.923 31.47 199.044 31.2366 199.147 30.966C199.249 30.686 199.301 30.3733 199.301 30.028C199.301 29.5053 199.175 29.0386 198.923 28.628C198.671 28.208 198.33 27.8766 197.901 27.634C197.481 27.382 197.019 27.256 196.515 27.256H193.687C193.649 27.256 193.631 27.2746 193.631 27.312L193.603 36.93ZM196.515 31.134H195.311V28.936H196.515C196.813 28.936 197.07 29.0433 197.285 29.258C197.509 29.4726 197.621 29.7293 197.621 30.028C197.621 30.336 197.509 30.5973 197.285 30.812C197.061 31.0266 196.804 31.134 196.515 31.134Z"
      />
    </svg>
  );
};

const Navbar = ({ theme, handleThemeChange }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="container">
      <div className="relative flex justify-between items-center h-16">
        <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
          <button
            className="inline-flex items-center p-2 rounded-md hover:shadow-md focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
            aria-label="Main menu"
            aria-expanded="false"
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <SVGProvider name={isMenuOpen ? 'menu-open' : 'menu-closed'} />
          </button>
        </div>
        <div className="flex-1 flex items-center justify-center md:justify-start">
          <div className="flex-shrink-0">
            <Link href="/">
              <a
                aria-label="Sibasish Mohanty"
                className="inline-flex items-center p-2 rounded-md focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
              >
                <Logo className="h-8 md:h-6 w-auto" theme={theme} />
                <Signature className="h-6 w-auto ml-2 fill-current hidden md:block" />
              </a>
            </Link>
          </div>
          <div className="hidden md:flex md:ml-4">
            {links.map(({ name, href }) => (
              <Link key={name} href={href}>
                <a className="ml-4 px-3 py-2 rounded-md font-medium leading-5 text-text-offset hover:text-text hover:bg-background focus:outline-none focus:text-text focus:bg-background transition duration-150 ease-in-out">
                  {name}
                </a>
              </Link>
            ))}
          </div>
        </div>
        <button
          className="inline-flex items-center p-2 rounded-md hover:shadow-md focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
          onClick={() => handleThemeChange(theme === 'theme-light' ? 'theme-dark' : 'theme-light')}
          type="button"
          aria-label="Theme Toggle"
        >
          <SVGProvider name={theme === 'theme-light' ? 'sun' : 'moon'} />
          <span className="hidden lg:inline ml-2">{`${
            theme === 'theme-light' ? 'Light' : 'Dark'
          } Mode`}</span>
        </button>
      </div>
      <div className={`p-2 pb-3 md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        {links.map(({ name, href }) => (
          <Link key={name} href={href}>
            <a className="block mt-1 px-3 py-2 rounded-md font-medium leading-5 text-text-offset hover:text-text hover:bg-background focus:outline-none focus:text-text focus:bg-background transition duration-150 ease-in-out">
              {name}
            </a>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
