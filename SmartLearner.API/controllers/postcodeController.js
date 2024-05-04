const postcodeService = require('../services/postcodeService');

class PostcodeController {
    async createPostcode(req, res, next) {
        try {
            const { postcode, city, country} = req.body;
            const result = await postcodeService.createPostcodeAsync({ postcode, city, country });
            res.status(201).json(result);
        } catch (err) {
            next(err);
        }
    }

    async getPostcodes(req, res, next) {
        try {
            const { page, pagesize, search } = req.query;
            const postcodes = await postcodeService.getPostcodesAsync(page, pagesize, search);
            res.json(postcodes);
        } catch (err) {
            next(err);
        }
    }

    async updatePostcode(req, res, next) {
        try {
            const postcode = await postcodeService.updatePostcodeAsync(req.query.id, req.body);
            res.json(postcode);
        } catch (err) {
            next(err);
        }
    }

    async deletePostcode(req, res, next) {
        try {
            const result = await postcodeService.deletePostcodeAsync(req.query.id);
            res.json(result);
        } catch (err) {
            next(err);
        }
    }
}

module.exports = new PostcodeController();
