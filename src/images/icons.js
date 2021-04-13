import React from 'react';
import MaterialCommunityIconsI from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIconsI from 'react-native-vector-icons/MaterialIcons';
import FontAwesomeI from 'react-native-vector-icons/FontAwesome';
import FoundationI from 'react-native-vector-icons/Foundation';
import AntDesignI from 'react-native-vector-icons/AntDesign';
import EvilIconsI from 'react-native-vector-icons/EvilIcons';
import IoniconsI from 'react-native-vector-icons/Ionicons';
import FontistoI from 'react-native-vector-icons/Fontisto';
import FeatherI from 'react-native-vector-icons/Feather';
import EntypoI from 'react-native-vector-icons/Entypo';

const MaterialCommunityIcons = (props) => (
  <MaterialCommunityIconsI {...props} />
);
const MaterialIcons = (props) => <MaterialIconsI {...props} />;
const FontAwesome = (props) => <FontAwesomeI {...props} />;
const Foundation = (props) => <FoundationI {...props} />;
const AntDesign = (props) => <AntDesignI {...props} />;
const EvilIcons = (props) => <EvilIconsI {...props} />;
const Ionicons = (props) => <IoniconsI {...props} />;
const Fontisto = (props) => <FontistoI {...props} />;
const Feather = (props) => <FeatherI {...props} />;
const Entypo = (props) => <EntypoI {...props} />;

export default {
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome,
  Foundation,
  AntDesign,
  EvilIcons,
  Ionicons,
  Fontisto,
  Feather,
  Entypo,
};
