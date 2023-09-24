// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: icon('ic_home'),
  },
  {
    title: 'tipps',
    path: '/dashboard/tipps',
    icon: icon('ic_tipps'),
  },
  {
    title: 'analyse',
    path: '/dashboard/analysis',
    icon: icon('ic_analytics'),
  },
  {
    title: 'energie',
    path: '/dashboard/information',
    icon: icon('ic_information'),
  },
];

export default navConfig;
