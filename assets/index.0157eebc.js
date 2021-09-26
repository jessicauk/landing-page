var A=Object.defineProperty,e=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,n=(e,i,t)=>i in e?A(e,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[i]=t;import{s as a,j as o,R as r,a as s}from"./vendor.9db48fb1.js";!function(){const A=document.createElement("link").relList;if(!(A&&A.supports&&A.supports("modulepreload"))){for(const A of document.querySelectorAll('link[rel="modulepreload"]'))e(A);new MutationObserver((A=>{for(const i of A)if("childList"===i.type)for(const A of i.addedNodes)"LINK"===A.tagName&&"modulepreload"===A.rel&&e(A)})).observe(document,{childList:!0,subtree:!0})}function e(A){if(A.ep)return;A.ep=!0;const e=function(A){const e={};return A.integrity&&(e.integrity=A.integrity),A.referrerpolicy&&(e.referrerPolicy=A.referrerpolicy),"use-credentials"===A.crossorigin?e.credentials="include":"anonymous"===A.crossorigin?e.credentials="omit":e.credentials="same-origin",e}(A);fetch(A.href,e)}}();const d=a.div`
  width: 100%;
  height: 100vh;
  background-image: url(${"/landing-page/assets/background.677b8836.png"});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  overflow: hidden;
`,g=o.exports.jsx,l=o.exports.jsxs;function c({children:A}){return g(d,{children:A})}c.displayName="Hero";const B=a.div`
  width: 85%;
  height: 15%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,u=a.img`
  width: 6em;
  cursor: pointer;
`,S=a.button`
  padding: ${({padding:A="0.3em"})=>A};
  ${({color:A="#fbfcfd"})=>`\n    color: ${A};\n    background: transparent;\n    border: 1px solid #fff;\n    border-radius: 1.2em;\n    outline: none;\n    cursor: pointer;\n  `}
`;function m(A){var a=((A,n)=>{var a={};for(var o in A)i.call(A,o)&&n.indexOf(o)<0&&(a[o]=A[o]);if(null!=A&&e)for(var o of e(A))n.indexOf(o)<0&&t.call(A,o)&&(a[o]=A[o]);return a})(A,[]);return g(S,((A,a)=>{for(var o in a||(a={}))i.call(a,o)&&n(A,o,a[o]);if(e)for(var o of e(a))t.call(a,o)&&n(A,o,a[o]);return A})({},a))}m.displayName="Button";function h(){return l(B,{children:[g(u,{src:"/landing-page/assets/logo.8cf83713.png"}),g(m,{type:"button",children:"Sign up"})]})}h.displayName="Navbar";const p=a.div`
  width: 3em;
  height: 100vh;
  background: linear-gradient(#00545d, #000729);
  position: absolute;
  right: 0;
  top: 0;
`,I=a.img`
  display: block;
  width: 1.8em;
  margin: 2em auto 0;
  cursor: pointer;
`,E=a.div`
  ${({place:A,position:e})=>A&&`\n    ${A}: ${e}em;\n  `}
  width: 3em;
  text-align: center;
  position: absolute;
  transform: translateY(-50%);
`,C=a.img`
  width: 2.5em;
  margin: 0.3em auto;
  cursor: pointer;
`;function b(){return l(p,{children:[g(I,{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAAA+CAYAAACMY42mAAAABHNCSVQICAgIfAhkiAAAAQdJREFUeF7t2rGNwkAURdH5KfHmdEIR9Ewjm20BxEbQgC+BV0gc4isGHT3ZATPbtl2Xz67AgNo1egWgmhOo6LSmht/egYoLAAUqCsTMokBFgZhZFKgoEDOLAhUFYmZRoKJAzCwKVBSImUWBigIxsyhQUSBmFgUqCsTMokBFgZhZFKgoEDOLqlDuHjQpdw+ak7sH0QlUhqrht3feenEBoEBFgZhZFKgoEDOLAhUFYmZRoKJAzCwKVBSImUWBigIxsyhQUSBmFgUqCsTMokBFgZhZFKgoEDOLAhUFYvb8S/281jrF/lOz35m5H/njnlCXtdbPkYf8w3ffZubvyHNARV1Qb0B5RgWsB8A+M7folO8DAAAAAElFTkSuQmCC"}),l(E,{id:"social-links",place:"top",position:12,children:[g(C,{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAABWNJREFUeF7tW92KFUcQ/goSSCCSBBKIoGAucpGLyEZIIF5I9AV8BX0D3yA+im+QPEHieqGgoCZ7sRd7IaJgQGGFFRQUSr5D1dk6c2bO9PRMz8zqNhwOe3amu/qr/+4qQeGhqp8A+AbA57bUV/b9WfjtAMA7+/2lfb8G8EJE/PcilEqJWVX1CwDf2sZP9FyD4LwA8FxEXvWca+31wQAwTp8G8F3grC/4HIATv28/vvMNGWCUFI6v7dtBjERTKv4H8GQoyegNQNj4KQCfGrVvAHCj5Bq5lz1UlepDaSIwVBuOtwCeisij7IntxV4AqCq5/X3gODf9SERcj/vSt/K+qtJ+cD2XEkoE16NUZI0sAExkfwTg+l1049WdGRA/hPVpJ3ZEhJLXaXQGwBb/ycSdC5IDzzqtOtDDqnrSJIKqQbV40NVQdgLAFiTnOWjYdocyRrmYmA0iTbQTHKQpmSHJAKgqFyHiHLTCe7lEl3hPVakS9EIcz0RkN2WdJABUlSKfhXAKEUM9U5VQEdlpm7sVgMB5RmT3u+pYGwFD/98M9DkAjCtaJXUjAAHRI7F5B9NA+DXFJjQCYNaeSHY2LENzNWe+ijrcbZLcWgAMwZ/N1bWKUQ6BY7wTDCNd5L26OKEJgF8syGAo22pIxthM7hrBgB+IyL3qPGsABNFhkEPRKZqO5m4s9T2LE2gPGCytxQgrANjD5D5z904BRSpBUzwXmPpaRO5EGqoAMNHgZ19EHkxBbKk1VdXVmqH7MotcAmDc/80MH/19kYyu1Abb5g1ejQbxjqt2BOCD5X6ID+jZmEovpSACQO5T90fjvqpeAXAZwO8A/KyQ9D4UERI76AhSsLQFCwBC5PRGRG4PumrNZEbIn7bx2uVEpDVMz6FTVc+bR1gERw6Ai39yFpWzuIFNTv8DYGvDHP+KyKb/5y5PZntWuyciTxwAt5D/9T3Da6NMVa8D+KPluW0RoVoMPuyM8SyARWAkqsoAgWIBEfl78BUrE6oqvcuXNes8BvAXgIX3ERECVWSo6iWb+BYB4CEHxaJ42Kuq5CrFvzq4+a2xXG8Ij3cJgOv/SoBQAvoN4n9VRG6UWLNuzpU9h4xpSgAuisjNqQDw4KCY/zfRVwD0+/xUxzX6fv9RRLZLghHigX2qwBgAcPPJo1QM4ARUAfAI8HbOxULKrlR1bgDw3pEp8gElYOESSrrAuQHA/S73fQzAYWxcTAWC7jVFgWN7gRUVKG4EZwgA8xGeeI/jBeYOgN+pLbKjFKue+8yGSHBsFTiMfmcSCk8KwJjJ0FyMoF/2LpIhXiJeKB0LmO+dCwCH6bARNsqByBxswNqBiAEwypHYTACoPRLzwGDt5iTX4jfk4ZOrgKp67nN4KGpS4KelJdPiSQEIWeDy9HvUi5GpVSCk/rUXI/QGlAJ+F5GCKQEI3OdtN/Oexa130+Vo7V16X3swMQCbL0fNDpD7jXfpAwBwBgA/1cGrsGKXsbHmoXrztalAgnW4LCv5EAokGmsejktkGvw1b4uoCkm1dn1Vo9T74cifUky/v1ZMfVwmtwn91Fq7UhzMnXeQQslwiuOxc1Y5eu4mct/rWuOYVIRwRIulk2odkgCwGOEolcsnV7cmA2Ag+OkR//y4GiaCTeCRMiss6CJ7Ny3l6roxJDZtZVW0d5KAAALPD2LTFJuWeKpcLJyNQE3aNFUhJDYt8V9Fu8dq2uZ6N21lSUBVbO1onf063v1J1aA0DNk4SdXz/mOKOw3dtI2TFWng5gkCpcI7PP2RoVpnyXF2hM2ndbYhlxi6eZqdoSzgnm/zdJM1t3sHdpy5VHhJLCXGO0/r2ufJbapQ0XT8PXl4F66VFYKFAAAAAElFTkSuQmCC"}),g(C,{src:"data:image/png;base64,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"}),g(C,{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAA9CAYAAAAd1W/BAAAABHNCSVQICAgIfAhkiAAAB1JJREFUaEPdm9muFUUUhv+F8yyOMU6oMc4DTnEWfQH1CZQnEK+8VO68xCdQn0B4AWUIaiTIpEFCCCABEhGBOIGKv/mOVcem6d29e9jQWEnn7ORUV1f9tYZ/rVoVmnGzfbGk6yRdIumC9FxY+M0M/kzPH4Xfv0v6MSKOz3KKMfTgthnzaknXpueynt/4VdJhwJB0LCLcc7xTXh8MANvs8O2SbpB0fuErf0k6IukXSfz+Of3veN7dJCVICu2K9P7lkhZWjPWDpN0RcWIIIHoDYPsiSXdKulHSgjQpFsmOHYmIo30mahtpAgjUCHBof0s6IGlvXyA6A5AWvkjSTYWFH0y7MxO9TZJyR/pmEYg9EYH9aN06AWAb/X5Q0nnpizNdeHlVFUCclPRNRGArWrXWANhmB9h53j0kaeesLfWkFSUg7pZ0vSSMI7ZhTxsEpgbANrv9QNJFvrE9Itj5s95so4b3pYlge76NCKSisU0FgO1LJT0kCZeGJf86IrDqo2m28RqPJa+B69wWEb81TbARgOTeHpcEecG6b4oIQBhds437XZy8BUZxY0RAqCa2WgBsw9xYPBJwMCK2j27VFROyjTqgFkgAIMA0K9tEAGzj00HzKnY+IjacC4vPc7T9ZJKEY0llKxlkHQDoPNZ11GI/aVNK6nAgIr6r6lsJQHJ1uDt0/auz5eb6Slxyk08lw4iL3F0e8zQAbF8p6YmxWvu2oJS8A/YAlZhvVQBg9ND7SsTaTmAM/QsSTTS5cSIAtonkoLhweUR/lO6uLajJHqAKRJxQZiLKuTYvAcnqP506jYbltV1sjVHMbBFe8GXOKxQBIJa/K4Wwm4b6cJtxbBNjvJpiDcJonlVV/J4wuW2oXXCNOyJif1kCsu5Dc1vH8GnyRzu+S8z/rqRlFYAxlxURsZz/2QYg+r0dEZtbAsx3oMvztmBOAhLdRfxPRMTnbQYtEI+PMJ4R8Xrb920jcY82vMdikRAW8UFEVIHV+Gnbz0oiibOeHEIGIIv/vojY2ThKRQfb+FgmuFLS0mklwfZ7afen/ewqSW8CWESsnvalwkZlmjynBhmALP5bI4JwsnWzXaSa7BYgNIqobfKF7Oq0jTGRlpc7AkBq7eFs68I2Ud5zkk5GxNppZ1HuVwKAf5+iu1Xj2l4i6bMO3wRcVK5Ts/1iymatB4CMSK9ozzaij4EqNzI0KyR9XFYL269J+qTlKjB+jNe5FaLFrQBwqyTSSr2Y35SLAST0dnNErLH9vqR3Wq5kCACIc3h2AgCLB4Te5KdGClqusbY7vADJ6dwKm74XAMjzkdPv5P/zLGx/mHZ3qaSXOs+u+UW4BucEnVs6a4APHAQAkh4M2BcAjB5B1MxbRDSm8uomUQDgCABADAgS1vYJfmxjld+Y+er//cDiaVzspLmk4AhPcBwAcEULIuLTPpNPVBgffSakoBMHKK7P9iscsQHA8ynj20sCGNw2DA1bMOvWC4CyBOTkYS8bUDCGSBTqAL2eVVs4LdWumkDBBhxDAnLycygAkAIWDxA8g7cBjeAhALhH0s1D8IAzpAZD8oB9AJBZUS8mWDIws/QIQzLBXQBwTYquesUCZTm3DV9/a2D5J6O7qI/+JynNIfFmAIBUvIARj4h1Q044uVhoK+HrEOxweUSQP+jVbLNe1r0u5wOyIeycD6ghHSwe19iU8Wla1JaI6DsGrjpHv4ciYlsGACOIMRxMDVLuDo/QK3BJqCD6S/qwv4KbrswI5aQIlVtfNG1FyeCRzSnqOq6PnWqT5an75GCLT/r/TKL+/+UE0z86Z4Vts2Bi/aHJzxryf23LXmrUsTornADI7pDSttbnAoldkanl6RsPsOvL+qS9JjDAzHp3RcRe+hQPRvhNB0pNOidHEhDoPU9ViqxO3Lek9NnKvq6uwi3nkyHKZzj2m0vinhJXFzgBx0cb+oTHBaOTKXG2Czm3nzPG/OVZPZSoVyye0hk2l2pW0nE/5T5Vp8OPpBrfwZhhG6M6i74Ftns4IpCy+VYFAJVgnKRyMkxB1KiqwdoClOoDyHohBYg+KjAZgGQQc4BEcRGqMJPS17aLads/VYgg+hR77Y+IHeUxJpXI8AKoYRD/DzVCSDHSfFq1WF2RFOQIboDhOJerxDDolMZUFlM31QmyeNLHnKYORpPbinLb/oWTH+4UkOiZWCzZmF62jVEEBNRi1OpQKo1D3Fn8KUZvKhtQ4UeLtcIMPDrvULD2bBQVokSPtWWypxGhOlFL1eL3plMkunZmi21Fuql/qVqcAijmNly1eHECtm9LtURjvC8Ax/++CbBGHtA0gG2O0u5PxpHuZ/vGCMaOOwKta5sajeAkMJLBIfy95UxdnZlwVYZqL+4Mdapp7AxABiZVmAAEWaVZ3RqjaJtYvnxrrPNlqYnBUJP410gEXIGcQvneIF4D0YSN8TvHFpPuDcI+seT8ZdH8zo1dHte9wQqXiVSRECH5yO2yoW6OciOM2oBx3hytkYxR3x3+B0FsV111NQLtAAAAAElFTkSuQmCC"})]}),l(E,{id:"useful-links",place:"bottom",position:0,children:[g(C,{src:"data:image/png;base64,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"}),g(C,{src:"data:image/png;base64,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"})]})]})}b.displayName="Sidebar";const k=a.div`
  color: #fbfcfd;
  position: absolute;
  top: 50%;
  left: 8%;
  transform: translateY(-50%);
  z-index: 2;
  text-align: left;
  h1 {
    font-size: 4em;
    margin: 0.3em 0 0.5em;
    line-heigth: 4em;
  }
`;function R(){return l(k,{children:[g("small",{children:"Welcome to our"}),l("h1",{children:["World's",g("br",{})," Creative Studio"]}),g(m,{type:"button",children:"Take a tour"})]})}R.displayName="Content";const f=a.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: absolute;
  bottom: -4em;
  img {
    width: 3em;
    animation: bubble 7s linear infinite;
    &:nth-child(1) {
      animation-delay: 2s;
      width: 2em;
    }
    &:nth-child(2) {
      animation-delay: 1s;
    }
    &:nth-child(3) {
      animation-delay: 3s;
      width: 4em;
    }
    &:nth-child(4) {
      animation-delay: 4.5s;
    }
    &:nth-child(5) {
      animation-delay: 3s;
      width: 3em;
    }
    &:nth-child(6) {
      animation-delay: 6s;
    }
    &:nth-child(7) {
      animation-delay: 7s;
      width: 2em;
    }
  }
  @keyframes bubble {
    0% {
      transform: translateY(0);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    70% {
      opacity: 1;
    }
    100% {
      transform: translateY(-80vh);
      opacity: 0;
    }
  }
`;var y="/landing-page/assets/bubble.31a4b3b7.png";function O(){return l(f,{children:[g("img",{src:y}),g("img",{src:y}),g("img",{src:y}),g("img",{src:y}),g("img",{src:y}),g("img",{src:y}),g("img",{src:y})]})}O.displayName="Bubbles";function D(){return g("div",{className:"App",children:l(c,{children:[g(h,{}),g(R,{}),g(b,{}),g(O,{})]})})}r.render(g(s.StrictMode,{children:g(D,{})}),document.getElementById("root"));
