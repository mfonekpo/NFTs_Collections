/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
myNFTs = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_name, _eyeColor, _shirtType, _shoeSize, _bling) {

   const MfonNFT = {
      "name": _name,
      "eyeColor": _eyeColor,
      "ShirtType": _shirtType,
      "ShoeSize": _shoeSize,
      "Bling": _bling
   }
   myNFTs.push(MfonNFT);
   console.log(`Minted NFT: ${_name}\n`)


}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    
   for (let i = 0; i < myNFTs.length; i++){
        console.log(`NFT MetaData:`);
        console.log(`NFT ID: ${i + 1}`);
        console.log(`Name: ${myNFTs[i].name}`);
        console.log(`Eye Color: ${myNFTs[i].eyeColor}`);
        console.log(`Shirt Type: ${myNFTs[i].ShirtType}`);
        console.log(`Shoe Size: ${myNFTs[i].ShoeSize}`);
        console.log(`Bling: ${myNFTs[i].Bling}`);
   }

}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
   console.log(`Total Supply: ${myNFTs.length}`);
}

// call your functions below this line

mintNFT("Mfon", "brown", "Vintage", 45, "Diamond Bracelets");
listNFTs();
getTotalSupply();