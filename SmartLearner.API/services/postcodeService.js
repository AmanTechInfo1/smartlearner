const { nullable } = require("zod");
const Postcode = require("../models/postcodeModel");

class PostcodeService {
    async createPostcodeAsync(postcodeData) {
        try {
            const postcode = await Postcode.create({
                ...postcodeData,
                createdOn: new Date(),
            });
            const totalCount = await Postcode.countDocuments();
            const resultObject = {
                message: "Postcode added successfully",
                statusCode: 201,
                success: true,
                data: { postcode, totalCount }
            };
            return resultObject;
        } catch (err) {
            const resultObject = {
                message: `Postcode Add Failed: ${err.message}`,
                statusCode: 400,
                success: false,
                data: null
            };
            return resultObject;
        }
    }

    async getPostcodesAsync(pageNumber, pageSize, query) {
        try {
            const skip = (pageNumber - 1) * (pageSize || 20);
            let filter = { isDeleted: false };
            if (query) {
                const regex = new RegExp(query, "i");
                filter.$or = [{ name: regex }];
            }
            const totalCount = await Postcode.countDocuments(filter);
            const postcodes = await Postcode.find(filter).sort({ createdOn: -1 }).skip(skip).limit(pageSize || 20);

            const resultObject = {
                message: "Postcodes fetched successfully",
                statusCode: 200,
                success: true,
                data: { postcodes, totalCount },
            };

            return resultObject;
        } catch (err) {
            const resultObject = {
                message: "Could not fetch postcodes",
                statusCode: 400,
                success: false,
                data: null,
            };
            return resultObject;
        }
    }

    async updatePostcodeAsync(postcodeId, postcodeData) {
        try {
            const postcode = await Postcode.findByIdAndUpdate(postcodeId, {
                postcode: postcodeData.postcode,
                city: postcodeData.city,
                country: postcodeData.country
            }, {
                new: true,
            });
            const resultObject = {
                message: "Postcode updated successfully",
                statusCode: 200,
                success: true,
                data: { postcode },
            };
            return resultObject;
        } catch (err) {
            const resultObject = {
                message: err.message,
                statusCode: 400,
                success: false,
                data: null,
            };
            return resultObject;
        }
    }

    async deletePostcodeAsync(postcodeId) {
        try {
            await Postcode.findByIdAndUpdate(
                postcodeId,
                {
                    isDeleted: true,
                    deletedOn: new Date(),
                });
            const resultObject = {
                message: "Postcode deleted successfully",
                statusCode: 200,
                success: true,
                data: null,
            };
            return resultObject;
        } catch (err) {
            const resultObject = {
                message: err.message,
                statusCode: 400,
                success: false,
                data: null,
            };
            return resultObject;
        }
    }
}

module.exports = new PostcodeService();