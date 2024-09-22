function SelectAddressForm({selectedPlace, onSelect}) {
    return (
        <div className="border-gray-700 p-2 mx-2">
            <ul className="grid grid-cols-2 max-h-[300px] overflow-y-auto gap-2">
            {selectedPlace.map((place)=>(
                <li key={place.id}  className="">
                    <button onClick={()=>onSelect(place.id, place.name)} className="hover:bg-blue-100 border-b-2 p-2 border-b-gray-100 w-[190px] flex justify-start">{place.name}</button>
                </li>
            ))}
            </ul>
        </div>
    );
}

export default SelectAddressForm;
