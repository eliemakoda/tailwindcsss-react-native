import React from 'react';
import { withExpoSnack } from 'nativewind';

import { Text, View, Button } from 'react-native';
import { styled } from 'nativewind';

const StyledView = styled(View)
const StyledText = styled(Text)
const Bouton=styled(Button)
const App = () => {
  return (
    <StyledView className="flex-1 items-center justify-center bg-blue-600">
      <StyledText className="text-slate-800 bg-yellow-300">
        Yo gar voici le code que tu voulais
      </StyledText>
      <StyledView       className='bg-zinc-600rounded pb-4'
>
      <Bouton
      title='clique moi'
      />
      </StyledView>
    </StyledView>
  );
}
export default withExpoSnack(App);
