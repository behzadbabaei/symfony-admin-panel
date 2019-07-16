<?php


namespace App\Tests\Unit;

use PHPUnit\Framework\TestCase;

class CalculateTest extends TestCase
{

    public function testCalculator()
    {
        // assert that your calculator added the numbers correctly!
        $this->assertEquals(42, (10+32));
    }

}