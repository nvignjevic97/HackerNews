using HackerNewsTest.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HackerNewsTest.HackerNewsBaseInterface
{
    public interface IHackerNews
    {
        Task<IEnumerable<int>> GetNewStoriesAsync();
        Task<IEnumerable<int>> GetAskStoriesAsync();
        Task<IEnumerable<int>> GetJobStoriesAsync();
        Task<IEnumerable<int>> GetShowStoriesAsync();
        Task<StoryDto> GetStoryByIdAsync(int ids);
        Task<int> GetLastStoryAsync();
    }
}
