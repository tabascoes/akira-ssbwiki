import 'nextra-theme-docs/style.css'
import { useEffect } from 'react';

export default function Nextra({ Component, pageProps }) {
  useEffect(() => {
	  // ここに全ページ共通で行う処理
    return (<div>a</div>);
  },[router.pathname])
  return <Component {...pageProps} />
}
