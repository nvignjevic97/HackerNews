using System.Collections.Generic;
using System.Threading.Tasks;
using HackerNewsTest.HackerNewsBaseInterface;
using HackerNewsTest.Models;
using Microsoft.AspNetCore.Mvc;

namespace HackerNewsTest.Controllers
{
    [ApiController]
    [Route("hackernews")]
    public class HackerNewsController : Controller
    {

        private readonly IHackerNews _hackerNews;
        public HackerNewsController(IHackerNews hackerNews)
        {
            _hackerNews = hackerNews;
        }

        [HttpGet]
        [Route("")]
        public async Task<IEnumerable<int>> GetNewStories()
        {
            return await _hackerNews.GetNewStoriesAsync();
        }

        [HttpGet]
        [Route("ask-stories")]
        public async Task<IEnumerable<int>> GetAskStories()
        {
            return await _hackerNews.GetAskStoriesAsync();
        }

        [HttpGet]
        [Route("job-stories")]
        public async Task<IEnumerable<int>> GetJobStories()
        {
            return await _hackerNews.GetJobStoriesAsync();
        }

        [HttpGet]
        [Route("show-stories")]
        public async Task<IEnumerable<int>> GetShowStories()
        {
            return await _hackerNews.GetShowStoriesAsync();
        }
        [HttpGet("{id}")]
        public async Task<StoryDto> Get(int id)
        {
            return await _hackerNews.GetStoryByIdAsync(id);
        }
    }
}
