import React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent({ color, size, ...props }) {
  return (
    <Svg height={size} fill={color} viewBox="0 0 50 50" width={size} {...props}>
      <Path d="M12.453 28.594c.056.025.113.05.162.081a24.288 24.288 0 007.254 2.997c.861.2 1.729.355 2.603.468 1.255.156 2.522.212 3.783.168.68-.018 1.354-.08 2.028-.168 1.573-.2 3.128-.556 4.632-1.055a21.844 21.844 0 002.322-.911.522.522 0 01.375-.05.388.388 0 01.25.549.684.684 0 01-.207.237 13.896 13.896 0 01-2.31 1.467 18.294 18.294 0 01-4.887 1.654c-.98.175-1.966.281-2.959.319l-.014-.003a.12.12 0 01.014.02v.034h-.749v-.034l.015-.018h-.015c-.343-.018-.686-.03-1.03-.056a17.885 17.885 0 01-2.703-.412c-3.064-.711-5.755-2.14-8.102-4.22-.218-.193-.424-.393-.637-.592a.46.46 0 01-.118-.169.23.23 0 01.043-.25.22.22 0 01.25-.056zm23.777-.33c.412.012.817.037 1.217.143.112.031.218.069.325.119a.42.42 0 01.255.343c.025.175.032.356.02.537a6.883 6.883 0 01-.962 3.015c-.2.33-.443.63-.724.892a.515.515 0 01-.2.125c-.119.031-.193-.031-.2-.15a.68.68 0 01.044-.187c.218-.587.43-1.167.6-1.773.1-.33.168-.668.211-1.01.013-.126.02-.25.007-.375a.487.487 0 00-.35-.456 2.421 2.421 0 00-.6-.112 9.855 9.855 0 00-1.716.074l-.755.094c-.081.006-.156 0-.2-.075-.043-.075-.025-.15.019-.225a.626.626 0 01.187-.174c.462-.331.98-.53 1.53-.662a7.444 7.444 0 011.292-.144zm-34.8-6.692c.561-.418 1.18-.568 1.866-.418.6.137.992.53 1.248 1.067.131.293.219.612.244.936.043.525.031 1.043-.138 1.555a2.31 2.31 0 01-.649 1.042c-.418.375-.917.512-1.467.456a2.097 2.097 0 01-1.086-.431c-.044.037-.025.087-.025.131v1.78c0 .386 0 .386-.393.386-.225 0-.45-.006-.674 0-.144.006-.269-.019-.35-.15C0 25.748 0 23.556 0 21.372c.1-.112.231-.131.375-.125.187.006.38 0 .568 0 .168 0 .23.056.28.212.02.063.032.125.05.188 0 .006.013.012.025.018a.5.5 0 00.131-.093zm20.886-.418a2.793 2.793 0 011.242.118c.818.294 1.155 1.086.936 1.873-.087.312-.293.537-.574.699a2.285 2.285 0 01-.78.25 4.155 4.155 0 01-1.417-.02c-.056-.012-.119-.018-.175-.024-.031.562.312 1.017.843 1.124.387.068.786.068 1.173-.013.181-.037.356-.075.537-.119.181-.043.256.013.256.2 0 .156-.006.312 0 .462.006.162-.069.25-.212.306a3.782 3.782 0 01-.737.2c-.474.075-.955.093-1.43-.013-.83-.175-1.379-.668-1.597-1.498-.169-.65-.194-1.304.012-1.947.294-.943.937-1.486 1.923-1.598zm20.18-.013c.313-.012.631.025.931.119.537.18.893.53 1.024 1.092.05.225.05.462.006.687a1.16 1.16 0 01-.63.83c-.325.175-.687.243-1.05.268-.417.032-.836 0-1.248-.075-.025-.012-.056-.012-.087-.012.012.131.037.256.069.38.112.425.4.669.824.75.424.075.861.056 1.28-.044.137-.031.268-.062.405-.1.181-.043.256.019.262.2v.45c0 .193-.044.255-.225.324-.43.162-.886.25-1.342.256a3.387 3.387 0 01-.936-.094c-.712-.193-1.211-.624-1.43-1.336-.212-.692-.243-1.398-.024-2.09.324-1.05 1.123-1.58 2.172-1.605zm4.583-.019c.4-.062.799-.05 1.192.044.843.212 1.36.755 1.592 1.58.03.112.056.23.068.349 0 .006.007.006.007.012h-.013V23.226c-.012.031 0 .069.025.094v-.025c0 .006.006.006.006.012v.718a.047.047 0 00-.012.025v-.013c-.038.025-.031.057-.025.094v.087c-.081.862-.624 1.854-1.935 2.01a3.092 3.092 0 01-1.174-.062c-.718-.181-1.217-.618-1.467-1.31a3.34 3.34 0 01-.006-2.36c.293-.8.899-1.249 1.742-1.374zm-8.072-2.072c.188 0 .238.044.244.237v6.58c-.006.18-.056.237-.231.237-.219.006-.437 0-.662 0h-.15a.221.221 0 01-.218-.169.89.89 0 00-.069-.218c-.056.012-.08.056-.124.08-.581.431-1.218.538-1.898.325-.5-.15-.843-.499-1.08-.955a2.973 2.973 0 01-.312-1.33c-.013-.492.031-.98.218-1.441.194-.48.493-.887.974-1.111.687-.319 1.367-.25 2.016.13.044.026.075.063.131.07.032-.044.013-.088.013-.132v-2.022c0-.237.044-.281.28-.281h.868zM18.16 21.104c.355.018.68.118.93.38.237.244.324.543.35.868.005.069.005.137.005.212v3.234c0 .28-.037.318-.318.318h-.761c-.05 0-.1 0-.15-.006a.172.172 0 01-.15-.144c-.013-.068-.013-.137-.013-.206v-2.89a1.056 1.056 0 00-.037-.343.467.467 0 00-.424-.343 2.204 2.204 0 00-1.074.206.103.103 0 00-.075.112v3.283c0 .063 0 .119-.013.181 0 .07-.043.124-.106.143l-.05.007c-.093.006-.187.006-.287.006h-.661c-.231 0-.281-.056-.281-.287v-2.952a1.43 1.43 0 00-.032-.325.471.471 0 00-.436-.374 2.197 2.197 0 00-1.093.212.1.1 0 00-.069.118v3.327c0 .231-.05.281-.28.281h-.837c-.218 0-.275-.062-.275-.274v-4.332c0-.05.007-.1.02-.15a.182.182 0 01.174-.119h.78c.113 0 .181.069.219.175.03.087.05.169.08.262.063 0 .1-.044.144-.069.344-.212.706-.393 1.112-.468.312-.062.624-.062.936 0 .293.063.555.238.724.487a.271.271 0 00.037.044c-.006.006 0 .006.007.019.156-.094.318-.194.487-.281a2.79 2.79 0 011.417-.312zm15.206.143c.193 0 .25.056.25.25v4.432c-.013.125-.07.18-.194.187a26.97 26.97 0 01-1.005 0c-.125 0-.181-.062-.194-.18-.006-.038-.006-.082-.006-.12v-4.32c.006-.193.056-.249.25-.249h.899zm-24.738-.05c.162.006.218.056.23.212.013.213.007.431.007.643.006.088 0 .169-.013.256-.025.113-.068.156-.18.169-.088.006-.17 0-.257-.006-.418-.038-.823.043-1.217.174-.087.032-.087.094-.087.163v2.996c0 .056 0 .106-.006.162a.15.15 0 01-.15.144c-.044.006-.094.006-.138.006h-.811c-.044 0-.094 0-.137-.006a.167.167 0 01-.15-.156c-.006-.05-.006-.1-.006-.15v-4.245c0-.287.03-.318.318-.318h.6c.162 0 .236.056.28.212.044.156.081.312.119.48a.186.186 0 00.106-.074c.112-.112.23-.219.356-.318a1.66 1.66 0 011.136-.344zm19.326.044c.15 0 .218.1.255.23.07.238.138.482.213.719.256.867.505 1.741.761 2.609-.006.006 0 .006.013.006l.112-.368c.287-.968.574-1.929.862-2.896l.037-.113a.255.255 0 01.25-.18h.948c.238 0 .288.068.206.293l-.374.992-1.255 3.265c-.012.037-.03.075-.043.112a.304.304 0 01-.313.206 18.13 18.13 0 00-.824 0c-.193.006-.305-.081-.374-.256-.156-.412-.318-.83-.474-1.242-.375-.98-.756-1.96-1.13-2.946a1.116 1.116 0 01-.081-.244c-.02-.125.025-.187.15-.187.355-.006.711 0 1.06 0zm-17.304 0c.144 0 .187.044.2.187.006.056.006.106.006.163v4.157c0 .068-.006.137-.012.206-.007.081-.069.137-.15.143-.038.007-.069.007-.106.007h-.868c-.031 0-.056 0-.087-.007a.18.18 0 01-.169-.162c-.006-.05-.006-.1-.006-.15.006-.693.006-1.404.006-2.116v-2.216c.006-.15.063-.206.212-.212.325-.006.65-.006.974 0zm36.898.935l-.119.008a.813.813 0 00-.636.387 1.398 1.398 0 00-.169.412c-.087.362-.081.73-.05 1.098.019.212.075.425.169.618a.802.802 0 00.586.468c.119.025.238.025.356.013a.808.808 0 00.593-.337c.081-.113.137-.231.175-.362.075-.256.106-.525.087-.8.007-.112 0-.224-.006-.336a1.842 1.842 0 00-.18-.706.804.804 0 00-.569-.443 1.136 1.136 0 00-.356-.012l.119-.008zm-44.932.008c-.374-.075-.73 0-1.073.162a.19.19 0 00-.125.193c.006.375 0 .75 0 1.124v1.13a.177.177 0 00.106.175c.281.15.593.218.911.2a.889.889 0 00.575-.22.962.962 0 00.287-.499c.112-.38.112-.78.075-1.18a1.744 1.744 0 00-.163-.636.763.763 0 00-.593-.45zm34.348-.04l-.165.008a.806.806 0 00-.656.419c-.056.1-.093.2-.125.305-.093.381-.124.78-.074 1.174.018.218.074.43.174.63.131.256.381.431.668.462.337.05.68-.018.98-.187a.164.164 0 00.1-.175v-1.136c0-.38-.006-.755.006-1.142a.172.172 0 00-.112-.181c-.3-.137-.63-.2-.961-.169l.165-.008zm-14.298-.042c-.4-.025-.792.131-.98.587-.056.137-.1.281-.118.43-.013.1-.013.1.08.113.244.038.494.056.738.056.137.013.274 0 .405-.03.219-.045.4-.138.475-.363a.716.716 0 00.018-.324.476.476 0 00-.287-.394 1.019 1.019 0 00-.33-.075zm19.97 0c-.363-.037-.681.05-.912.356-.15.2-.206.437-.25.68-.012.057.013.082.069.088.25.037.5.056.755.062.131.007.262-.006.387-.03.231-.045.437-.138.5-.388.08-.337-.025-.686-.462-.755-.032 0-.057-.013-.088-.013zM33.29 19.07a.657.657 0 01.424.58c.05.568-.33.855-.836.843-.069 0-.138-.013-.206-.025-.387-.094-.587-.393-.55-.824.032-.343.3-.6.668-.63.044-.007.088-.013.131-.007a.755.755 0 01.369.063zm-23.103-.063c.1-.006.2.013.294.044.337.112.512.406.48.786a.697.697 0 01-.593.637c-.137.025-.28.025-.418 0-.356-.069-.618-.33-.593-.78.038-.443.33-.687.83-.687z" />
    </Svg>
  );
}

const MemoSvgComponent = React.memo(SvgComponent);
export default MemoSvgComponent;
