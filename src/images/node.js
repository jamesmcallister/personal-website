import React from 'react'

const Logo = (props) => {
  return (
<svg width={props.width} height={props.height} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 314" preserveAspectRatio="xMidYMid">
  <defs>
    <linearGradient id="b" x1="68.1884%" x2="27.8227%" y1="17.4868%" y2="89.7551%">
      <stop stopColor="#41873F" offset="0%"/>
      <stop stopColor="#418B3D" offset="32.88%"/>
      <stop stopColor="#419637" offset="63.52%"/>
      <stop stopColor="#3FA92D" offset="93.19%"/>
      <stop stopColor="#3FAE2A" offset="100%"/>
    </linearGradient>
    <path id="a" d="M57.9034 1.8492c-1.8492-1.0402-4.0452-1.0402-5.8944 0L3.3517 29.9342C1.5025 30.974.4623 32.939.4623 35.0192v56.2854c0 2.0804 1.1558 4.0452 2.8894 5.0854l48.6573 28.085c1.8492 1.04 4.0452 1.04 5.8944 0l48.6573-28.085c1.8492-1.04 2.8894-3.005 2.8894-5.0853V35.0194c0-2.0803-1.155-4.045-2.889-5.0853L57.904 1.85z"/>
    <linearGradient id="d" x1="43.2765%" x2="159.2453%" y1="55.1688%" y2="-18.3061%">
      <stop stopColor="#41873F" offset="13.76%"/>
      <stop stopColor="#54A044" offset="40.32%"/>
      <stop stopColor="#66B848" offset="71.36%"/>
      <stop stopColor="#6CC04A" offset="90.81%"/>
    </linearGradient>
    <linearGradient id="e" x1="-4413.77%" x2="5327.93%" y1="13.43%" y2="13.43%">
      <stop stopColor="#6CC04A" offset="9.1916%"/>
      <stop stopColor="#66B848" offset="28.64%"/>
      <stop stopColor="#54A044" offset="59.68%"/>
      <stop stopColor="#41873F" offset="86.24%"/>
    </linearGradient>
    <linearGradient id="f" x1="-4.3888%" x2="101.4992%" y1="49.9972%" y2="49.9972%">
      <stop stopColor="#6CC04A" offset="9.1916%"/>
      <stop stopColor="#66B848" offset="28.64%"/>
      <stop stopColor="#54A044" offset="59.68%"/>
      <stop stopColor="#41873F" offset="86.24%"/>
    </linearGradient>
    <linearGradient id="g" x1="-9713.77%" x2="27.93%" y1="36.21%" y2="36.21%">
      <stop stopColor="#6CC04A" offset="9.1916%"/>
      <stop stopColor="#66B848" offset="28.64%"/>
      <stop stopColor="#54A044" offset="59.68%"/>
      <stop stopColor="#41873F" offset="86.24%"/>
    </linearGradient>
    <linearGradient id="h" x1="-103.8607%" x2="100.7968%" y1="50.2754%" y2="50.2754%">
      <stop stopColor="#6CC04A" offset="9.1916%"/>
      <stop stopColor="#66B848" offset="28.64%"/>
      <stop stopColor="#54A044" offset="59.68%"/>
      <stop stopColor="#41873F" offset="86.24%"/>
    </linearGradient>
    <linearGradient id="i" x1="130.613%" x2="4.3933%" y1="-211.0694%" y2="201.6054%">
      <stop stopColor="#41873F" offset="0%"/>
      <stop stopColor="#418B3D" offset="32.88%"/>
      <stop stopColor="#419637" offset="63.52%"/>
      <stop stopColor="#3FA92D" offset="93.19%"/>
      <stop stopColor="#3FAE2A" offset="100%"/>
    </linearGradient>
  </defs>
  <g fill="none">
    <path fill="#539E43" d="M253.1106 313.0944c-1.7336 0-3.3517-.4623-4.8542-1.2714l-15.3715-9.1304c-2.312-1.2714-1.156-1.7337-.463-1.9648 3.12-1.0402 3.698-1.2714 6.934-3.1206.346-.231.809-.1156 1.156.1156l11.788 7.05c.462.2313 1.04.2313 1.387 0l46.114-26.698c.462-.231.693-.6933.693-1.2712v-53.2803c0-.578-.231-1.0402-.693-1.2714l-46.115-26.583c-.463-.231-1.04-.231-1.387 0l-46.114 26.583c-.463.231-.694.809-.694 1.271v53.28c0 .462.231 1.04.693 1.271l12.597 7.281c6.819 3.467 11.095-.578 11.095-4.623v-52.587c0-.694.5773-1.387 1.3863-1.387h5.8944c.6932 0 1.387.578 1.387 1.387v52.587c0 9.13-4.97 14.447-13.638 14.447-2.6585 0-4.7388 0-10.633-2.89l-12.1356-6.935c-3.005-1.734-4.854-4.97-4.854-8.437v-53.28c0-3.468 1.85-6.704 4.855-8.437l46.1146-26.698c2.8896-1.618 6.819-1.618 9.7086 0l46.115 26.698c3.005 1.733 4.854 4.969 4.854 8.437v53.28c0 3.467-1.849 6.703-4.854 8.437l-46.1147 26.698c-1.5027.693-3.236 1.04-4.854 1.04zm14.2158-36.6375c-20.2257 0-24.3864-9.247-24.3864-17.106 0-.694.5778-1.387 1.387-1.387h6.0098c.6934 0 1.2713.462 1.2713 1.156.925 6.125 3.583 9.13 15.834 9.13 9.709 0 13.869-2.196 13.869-7.397 0-3.005-1.155-5.201-16.296-6.704-12.597-1.272-20.457-4.045-20.457-14.1 0-9.362 7.86-14.909 21.035-14.909 14.794 0 22.075 5.085 23 16.18 0 .346-.115.693-.346 1.04-.231.231-.578.462-.924.462h-6.01c-.577 0-1.155-.463-1.271-1.041-1.387-6.357-4.969-8.437-14.447-8.437-10.633 0-11.904 3.698-11.904 6.472 0 3.352 1.503 4.392 15.834 6.241 14.216 1.849 20.919 4.5072 20.919 14.447-.115 10.171-8.437 15.9492-23.115 15.9492z"/>
    <path fill="#333" d="M110.028 104.7115c0-2.0803-1.1558-4.045-3.005-5.0853L58.019 71.4257c-.809-.4623-1.7337-.6934-2.6583-.809h-.4623c-.9246 0-1.8492.3467-2.6582.809L3.2362 99.6262c-1.8493 1.0402-3.005 3.005-3.005 5.0853l.1155 75.8176c0 1.041.578 2.081 1.5025 2.543.9246.578 2.0804.578 2.8894 0l29.125-16.643c1.8493-1.04 3.005-3.005 3.005-5.085v-35.482c0-2.08 1.1558-4.045 3.005-5.085l12.3666-7.165c.9246-.578 1.9648-.809 3.005-.809 1.04 0 2.0803.231 2.8893.809l12.3666 7.166c1.85 1.04 3.005 3.005 3.005 5.086v35.482c0 2.081 1.156 4.045 3.005 5.086l29.125 16.643c.925.578 2.081.578 3.005 0 .925-.4622 1.503-1.5024 1.503-2.5426l-.115-75.8176zM345.571.3467c-.9245-.4623-2.0803-.4623-2.8893 0-.9246.578-1.5025 1.5025-1.5025 2.5427v75.124c0 .6936-.3467 1.387-1.04 1.8494-.6936.3467-1.387.3467-2.0805 0l-12.251-7.0502c-1.8492-1.04-4.0452-1.04-5.8944 0l-49.004 28.316c-1.8493 1.0402-3.005 3.005-3.005 5.0854v56.5165c0 2.0803 1.1557 4.045 3.005 5.0853l49.004 28.316c1.8492 1.0402 4.0452 1.0402 5.8944 0l49.004-28.316c1.8492-1.0402 3.005-3.005 3.005-5.0853V21.8438c0-2.196-1.1558-4.1607-3.005-5.201L345.571.347zm-4.5073 143.776c0 .578-.2312 1.0403-.6935 1.2714l-16.7585 9.709c-.4623.231-1.04.231-1.5024 0l-16.7585-9.708c-.4623-.231-.6935-.809-.6935-1.271v-19.417c0-.577.2312-1.04.6935-1.271l16.7585-9.708c.4623-.231 1.04-.231 1.5024 0l16.7585 9.709c.4623.231.6935.809.6935 1.272v19.417zm167.5846-19.879c1.8492-1.04 2.8894-3.005 2.8894-5.0852V105.405c0-2.0804-1.1558-4.0452-2.8894-5.0854L459.991 72.1192c-1.8492-1.0402-4.0452-1.0402-5.8944 0l-49.004 28.316c-1.8493 1.0402-3.005 3.005-3.005 5.0853v56.5165c0 2.0804 1.1557 4.0452 3.005 5.0853l48.6573 27.7382c1.849 1.0402 4.045 1.0402 5.778 0L489 178.4488c.9247-.4623 1.5025-1.5025 1.5025-2.5427 0-1.04-.578-2.08-1.5025-2.542l-49.2352-28.316c-.9247-.578-1.5025-1.502-1.5025-2.542v-17.683c0-1.04.5778-2.08 1.5024-2.542l15.3715-8.783c.9246-.578 2.0804-.578 3.005 0l15.3715 8.784c.9247.578 1.5026 1.503 1.5026 2.543v13.869c0 1.041.578 2.081 1.5025 2.543.9248.578 2.0805.578 3.005 0l29.125-16.989z"/>
    <path fill="#539E43" d="M456.2926 121.5856c.3467-.2312.809-.2312 1.1557 0l9.3616 5.432c.346.2312.577.578.577 1.0402v10.864c0 .4624-.231.809-.578 1.0403l-9.362 5.432c-.347.232-.809.232-1.156 0l-9.362-5.432c-.347-.231-.578-.577-.578-1.04v-10.864c0-.462.231-.809.578-1.04l9.361-5.432z"/>
    <g transform="translate(134.068 70.5)">
      <mask id="c" fill="#fff">
        <use />
      </mask>
      <use fill="url(#b)"/>
      <g mask="url(#c)">
        <path d="M51.8935 1.8492l-48.773 28.085C1.2713 30.974 0 32.939 0 35.0192v56.2854c0 1.387.578 2.6583 1.5025 3.6985L56.2853 1.156c-1.387-.2312-3.005-.1156-4.3918.6934zm4.7385 123.2036c.4624-.1156.9247-.3467 1.387-.578L106.792 96.39c1.849-1.04 3.0048-3.005 3.0048-5.0852V35.0194c0-1.5025-.6934-3.005-1.7336-4.045l-51.431 94.0784z"/>
        <path fill="url(#d)" d="M106.6763 29.934L57.7878 1.8493c-.4623-.231-1.0402-.4623-1.5025-.578L1.5025 95.1188c.4623.578 1.0402 1.0402 1.618 1.387l48.8885 28.0848c1.387.809 3.005 1.0402 4.5075.578l51.431-94.0787c-.3466-.463-.809-.809-1.2712-1.156z"/>
      </g>
      <g mask="url(#c)">
        <path d="M109.7968 91.3047V35.0194c0-2.0803-1.2713-4.045-3.1205-5.0853L57.7878 1.85c-.578-.3467-1.1557-.578-1.8492-.6934l53.5114 91.42c.2313-.3466.3468-.809.3468-1.2712zM3.1205 29.934C1.2713 30.9744 0 32.939 0 35.0195v56.2853C0 93.385 1.387 95.35 3.1205 96.39l48.8885 28.085c1.1558.6934 2.427.9245 3.814.6934l-52.3557-95.35-.3468.1157z"/>
        <path fill="url(#e)" fillRule="evenodd" d="M50.391.809l-.6935.3468h.9246L50.391.809z" transform="translate(0 -9.246)"/>
        <path fill="url(#f)" fillRule="evenodd" d="M106.792 105.636c1.3868-.809 2.427-2.1958 2.8893-3.6983l-53.627-91.536c-1.387-.231-2.8895-.1155-4.1608.6936L3.3517 39.0646 55.7074 134.53c.6935-.1156 1.5025-.3467 2.196-.6934l48.8885-28.2005z" transform="translate(0 -9.246)"/>
        <path fill="url(#g)" fillRule="evenodd" d="M111.2993 104.7115l-.3467-.578v.8092l.3467-.2312z" transform="translate(0 -9.246)"/>
        <path fill="url(#h)" fillRule="evenodd" d="M106.792 105.636l-48.773 28.085c-.6935.3467-1.387.578-2.196.6934l.9246 1.7337 54.0894-31.321v-.693l-1.387-2.311c-.231 1.618-1.2712 3.005-2.658 3.814z" transform="translate(0 -9.246)"/>
        <path fill="url(#i)" fillRule="evenodd" d="M106.792 105.636l-48.773 28.085c-.6935.3467-1.387.578-2.196.6934l.9246 1.7337 54.0894-31.321v-.693l-1.387-2.311c-.231 1.618-1.2712 3.005-2.658 3.814z" transform="translate(0 -9.246)"/>
      </g>
    </g>
  </g>
</svg>
  )
}

export default Logo