


export const adaptRoute =  (controller) => async (req, res) => {

    const request = {
        ...(req.body || {}),
        
        ...(req.query || {}),
      };
    const response = await controller.handle(request)

    res.json(response)

}