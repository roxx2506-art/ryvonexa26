const express = require('express');
const router = express.Router();
const Event = require('../models/Event');
const eventsData = require('../data/eventsSeed');
const { getInMemoryMode } = require('../config/db');

// GET /api/events
router.get('/', async (req, res) => {
  try {
    if (!getInMemoryMode()) {
      let events = await Event.find({});
      if (events.length === 0) {
        events = await Event.insertMany(eventsData);
      }
      return res.json({ success: true, count: events.length, data: events });
    }
    return res.json({ success: true, count: eventsData.length, data: eventsData });
  } catch (err) {
    return res.json({ success: true, count: eventsData.length, data: eventsData });
  }
});

// GET /api/events/:id
router.get('/:id', async (req, res) => {
  try {
    const event = eventsData.find(e => e.id === req.params.id);
    if (!event) {
      return res.status(404).json({ success: false, message: 'Event not found' });
    }
    return res.json({ success: true, data: event });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
