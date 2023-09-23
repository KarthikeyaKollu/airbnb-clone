'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { TbBeach, TbMountain, TbPool } from 'react-icons/tb';
import { 
  GiBarn, 
  GiBoatFishing, 
  GiCactus, 
  GiCastle, 
  GiCaveEntrance, 
  GiForestCamp, 
  GiIsland,
  GiWindmill
} from 'react-icons/gi';
import { FaSkiing } from 'react-icons/fa';
import { BsSnow } from 'react-icons/bs';
import { IoDiamond } from 'react-icons/io5';
import { MdOutlineVilla } from 'react-icons/md';

import CategoryBox from "../CategoryBox";
import Container from '../Container';



export const categories = [
  {
    label: 'Surgeon',
    icon: TbBeach, // Replace with Surgeon icon
    description: 'Specializing in surgical procedures.',
  },
  {
    label: 'Cardiologist',
    icon: GiWindmill, // Replace with Cardiologist icon
    description: 'Specializing in heart-related conditions and treatments.',
  },
  {
    label: 'Dermatologist',
    icon: MdOutlineVilla, // Replace with Dermatologist icon
    description: 'Specializing in skin-related issues and treatments.',
  },
  {
    label: 'Pediatrician',
    icon: TbMountain, // Replace with Pediatrician icon
    description: 'Specializing in child healthcare.',
  },
  {
    label: 'Orthopedic',
    icon: TbPool, // Replace with Orthopedic icon
    description: 'Specializing in musculoskeletal conditions and treatments.',
  },
  {
    label: 'Gynecologist',
    icon: GiIsland, // Replace with Gynecologist icon
    description: 'Specializing in women\'s reproductive health.',
  },
  {
    label: 'Neurologist',
    icon: GiBoatFishing, // Replace with Neurologist icon
    description: 'Specializing in neurological disorders and treatments.',
  },
  {
    label: 'Psychiatrist',
    icon: FaSkiing, // Replace with Psychiatrist icon
    description: 'Specializing in mental health and psychiatric treatments.',
  },
  {
    label: 'Ophthalmologist',
    icon: GiCastle, // Replace with Ophthalmologist icon
    description: 'Specializing in eye and vision care.',
  },
  {
    label: 'Dentist',
    icon: GiCaveEntrance, // Replace with Dentist icon
    description: 'Specializing in oral health and dental treatments.',
  },
  {
    label: 'Allergist',
    icon: GiForestCamp, // Replace with Allergist icon
    description: 'Specializing in allergies and immunology.',
  },
  {
    label: 'Urologist',
    icon: BsSnow, // Replace with Urologist icon
    description: 'Specializing in urinary tract and male reproductive health.',
  },
  {
    label: 'Oncologist',
    icon: GiCactus, // Replace with Oncologist icon
    description: 'Specializing in cancer diagnosis and treatment.',
  },
  {
    label: 'General Practitioner',
    icon: IoDiamond, // Replace with General Practitioner icon
    description: 'Offering general healthcare services for various medical issues.',
  },

];

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get('category');
  const pathname = usePathname();
  const isMainPage = pathname === '/';

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div
        className="
          pt-4
          flex 
          flex-row 
          items-center 
          justify-between
          overflow-x-auto
        "
      >
        {categories.map((item) => (
          <CategoryBox 
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  );
}
 
export default Categories;