import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from '@heroui/react';
import DropDownAction from './dropDownAction';
const UserListeModel2 = ({ turboy }:any) => {
  return (
    <Card className="max-w-[400px]">
      <CardHeader className="flex justify-between gap-3">
        <div className='flex gap-2 items-center'>
          <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>

          {/* <Image alt="heroui logo" height={40} radius="sm" src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4" width={40} /> */}
          <p className="text-md">HeroUI</p>
        </div>

        <DropDownAction id={turboy.id}  />
      </CardHeader>
      <CardBody>
      <p className="w-1/2 text-sm text-gray-500">Inscrit le : {turboy.DateinscritLe}</p>
      <p className="text-sm text-gray-500 mr-3">Défini le : {turboy.definiLe}</p>

      </CardBody>
      <CardFooter>
      <span className="bg-orange-500 text-white px-2 py-1 rounded text-sm mr-3">
        {turboy.creneau}
    </span>
      </CardFooter>
    </Card>
  );
};

export default UserListeModel2;
