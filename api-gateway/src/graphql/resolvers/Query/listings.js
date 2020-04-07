import ListingsService from "#root/adapters/ListingService";

const listingsResolver = async () => {
    return await ListingsService.fetchAllListings();
};

export default listingsResolver;
